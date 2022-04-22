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


def hash(name, size=10):
    if name is None:
        return False
    return hashlib.md5(name.encode("utf-8")).hexdigest()[:size]


hash(fake.name())


def genId(prefix="", size=8):
    return prefix + "".join(rstr.xeger(r"[A-Z0-9]") for i in range(size))


def initBootstrap():
    return {
        "_config": {},
        "couchello_db": {
            "_design": {},
            "_local": {},
            "_security": {"members": {"roles": [], "names": []}, "admins": {"roles": [], "names": []}},
        },
        "_users": {},
    }


def createUsers(data):
    u = {}
    s = data["couchello_db"]["_security"]
    g = {"Admin": "admins", "Member": "members"}
    for i in range(10):
        name = fake.name()
        _id = hash(name)
        user = {}
        user["_id"] = _id
        user["type"] = "user"
        user["password"] = _id
        role = random.choice(["Admin", "Member"])
        user["roles"] = [role]
        user["name"] = name
        s[g[role]]["names"].append(_id)
        u[_id] = user
    data["couchello_db"]["_security"] = s
    data["_users"] = u
    return data


def createOrganizations(r, size=1):
    r["organizations"] = {}
    for _ in range(size):
        n = fake.company() + fake.company_suffix()
        _id = hash(n)
        db = "org_" + _id + "_db"
        members = [r["_users"][u]["name"] for u in r["_users"]]
        r["organizations"]["id"] = {"_id": _id, "type": "organization", "name": n, "db": db, "members": members}
    return r


def createBootstrap():
    r = initBootstrap()
    r = createUsers(r)
    r = createOrganizations(r)
    return r


with open("bootstrap.header.txt", "r") as infile:
    with open("bootstrap.js", "w") as outfile:
        outfile.write(infile.read() + json.dumps(createBootstrap(), indent=4) + ";")