import pandas as pd
import rstr
from faker import Faker
from faker_e164.providers import E164Provider

fake = Faker()
fake.add_provider(E164Provider)
from datetime import datetime, date
import random
import hashlib
import json
import os


def hash(name, prefix="", size=8):
    if name is None:
        return False
    return prefix+hashlib.md5(name.encode("utf-8")).hexdigest()[:size]


hash(fake.name())


def genId(prefix="", size=8):
    return prefix + "".join(rstr.xeger(r"[A-Z0-9]") for i in range(size))


def initBootstrap():
    return {
        "_config": {},
        "_users": {},
    }

def createCentral(data):
    data["central_db"]={}
    return data

def createUsers(data, org, size=10):
    u = {}
    n = []
    m=[]
    roles = ["org_"+org+"_db"]
    for i in range(size):
        name = fake.name()
        h = hash(name)
        user = {}
        member = {}
        _id = "org.couchdb.user:"+h
        mid = "m:"+h
        user["_id"] = _id
        member["id"] = mid
        member["userId"]=_id
        user["type"] = "user"
        member["type"] = "member"
        user["password"] = h
        user["roles"] = roles
        user["name"] = h
        member["name"]= name
        member["organizationId"]="o:"+org
        u[_id] = user
        n.append(name)
        data["org_"+org+"_db"][mid]=member
        m.append(mid)
        data["_users"] = {**data["_users"], **u}
    return n,m


def createOrganizations(r, size=1):
    for _ in range(size):
        n = fake.company()
        _id = hash(n)
        db = "org_"+_id+"_db"
        
        r["central_db"][_id] = {
            "_id":"o:"+_id, 
            "type":"organization", 
            "name": n, 
            "db":db, 
            "members":[]
        }
        r[db]= {
            "_design": {},
            "_local": {},
            "_security": {
                "members": {"roles": [], "names": []},
                "admins": {"roles": [], "names": []}},
        }
        n, m = createUsers(r, _id, 10)
        r[db]["_security"]["admins"]["names"]=n
        r["central_db"][_id]['members']=m

    return r


def createBootstrap():
    r = initBootstrap()
    r = createCentral(r)
    r = createOrganizations(r,2)
    return r


with open("bootstrap.header.txt", "r") as infile:
    with open("bootstrap.js", "w") as outfile:
        outfile.write(infile.read() + json.dumps(createBootstrap(), indent=4) + ";")