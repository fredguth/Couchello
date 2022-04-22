const { networkInterfaces } = require("os");

const validate_doc_update = function (newDoc, oldDoc, userCtx, secObj) {
  if (userCtx.roles.indexOf("_admin") === -1) {
    throw {
      forbidden: "Admins only.",
    };
  }
};

const byDate = function (doc) {
  if ("date" in doc) {
    emit(doc.date, null);
  }
};

module.exports = {
    "_config": {},
    "_users": {
        "org.couchdb.user:4c98a1f4": {
            "_id": "org.couchdb.user:4c98a1f4",
            "type": "user",
            "password": "4c98a1f4",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "4c98a1f4"
        },
        "org.couchdb.user:2f92713c": {
            "_id": "org.couchdb.user:2f92713c",
            "type": "user",
            "password": "2f92713c",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "2f92713c"
        },
        "org.couchdb.user:d2b71ec8": {
            "_id": "org.couchdb.user:d2b71ec8",
            "type": "user",
            "password": "d2b71ec8",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "d2b71ec8"
        },
        "org.couchdb.user:3a265722": {
            "_id": "org.couchdb.user:3a265722",
            "type": "user",
            "password": "3a265722",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "3a265722"
        },
        "org.couchdb.user:7c7d3ecf": {
            "_id": "org.couchdb.user:7c7d3ecf",
            "type": "user",
            "password": "7c7d3ecf",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "7c7d3ecf"
        },
        "org.couchdb.user:fbdd92bb": {
            "_id": "org.couchdb.user:fbdd92bb",
            "type": "user",
            "password": "fbdd92bb",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "fbdd92bb"
        },
        "org.couchdb.user:6392ba45": {
            "_id": "org.couchdb.user:6392ba45",
            "type": "user",
            "password": "6392ba45",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "6392ba45"
        },
        "org.couchdb.user:4709e34f": {
            "_id": "org.couchdb.user:4709e34f",
            "type": "user",
            "password": "4709e34f",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "4709e34f"
        },
        "org.couchdb.user:aee9aad9": {
            "_id": "org.couchdb.user:aee9aad9",
            "type": "user",
            "password": "aee9aad9",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "aee9aad9"
        },
        "org.couchdb.user:c3cbc830": {
            "_id": "org.couchdb.user:c3cbc830",
            "type": "user",
            "password": "c3cbc830",
            "roles": [
                "org_35ce9bc3_db"
            ],
            "name": "c3cbc830"
        },
        "org.couchdb.user:19735110": {
            "_id": "org.couchdb.user:19735110",
            "type": "user",
            "password": "19735110",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "19735110"
        },
        "org.couchdb.user:064db5a3": {
            "_id": "org.couchdb.user:064db5a3",
            "type": "user",
            "password": "064db5a3",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "064db5a3"
        },
        "org.couchdb.user:026cfdc8": {
            "_id": "org.couchdb.user:026cfdc8",
            "type": "user",
            "password": "026cfdc8",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "026cfdc8"
        },
        "org.couchdb.user:387904c4": {
            "_id": "org.couchdb.user:387904c4",
            "type": "user",
            "password": "387904c4",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "387904c4"
        },
        "org.couchdb.user:260a6687": {
            "_id": "org.couchdb.user:260a6687",
            "type": "user",
            "password": "260a6687",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "260a6687"
        },
        "org.couchdb.user:4f1187ad": {
            "_id": "org.couchdb.user:4f1187ad",
            "type": "user",
            "password": "4f1187ad",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "4f1187ad"
        },
        "org.couchdb.user:e236fbd5": {
            "_id": "org.couchdb.user:e236fbd5",
            "type": "user",
            "password": "e236fbd5",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "e236fbd5"
        },
        "org.couchdb.user:dd1fb95b": {
            "_id": "org.couchdb.user:dd1fb95b",
            "type": "user",
            "password": "dd1fb95b",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "dd1fb95b"
        },
        "org.couchdb.user:f02b1603": {
            "_id": "org.couchdb.user:f02b1603",
            "type": "user",
            "password": "f02b1603",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "f02b1603"
        },
        "org.couchdb.user:8b557024": {
            "_id": "org.couchdb.user:8b557024",
            "type": "user",
            "password": "8b557024",
            "roles": [
                "org_09bf8521_db"
            ],
            "name": "8b557024"
        }
    },
    "central_db": {
        "35ce9bc3": {
            "_id": "o:35ce9bc3",
            "type": "organization",
            "name": "Walsh-Cooper",
            "db": "org_35ce9bc3_db",
            "members": [
                "m:4c98a1f4",
                "m:2f92713c",
                "m:d2b71ec8",
                "m:3a265722",
                "m:7c7d3ecf",
                "m:fbdd92bb",
                "m:6392ba45",
                "m:4709e34f",
                "m:aee9aad9",
                "m:c3cbc830"
            ]
        },
        "09bf8521": {
            "_id": "o:09bf8521",
            "type": "organization",
            "name": "Morgan-Wise",
            "db": "org_09bf8521_db",
            "members": [
                "m:19735110",
                "m:064db5a3",
                "m:026cfdc8",
                "m:387904c4",
                "m:260a6687",
                "m:4f1187ad",
                "m:e236fbd5",
                "m:dd1fb95b",
                "m:f02b1603",
                "m:8b557024"
            ]
        }
    },
    "org_35ce9bc3_db": {
        "_design": {},
        "_local": {},
        "_security": {
            "members": {
                "roles": [],
                "names": []
            },
            "admins": {
                "roles": [],
                "names": [
                    "Daniel Davis",
                    "Paul May",
                    "Mark Rosales",
                    "Jonathan Cohen",
                    "Jonathan Jackson",
                    "Carlos Weiss",
                    "James Morrow",
                    "Christopher Crosby",
                    "Joseph Mullen",
                    "Vanessa Garcia"
                ]
            }
        },
        "m:4c98a1f4": {
            "id": "m:4c98a1f4",
            "userId": "org.couchdb.user:4c98a1f4",
            "type": "member",
            "name": "Daniel Davis",
            "organizationId": "o:35ce9bc3"
        },
        "m:2f92713c": {
            "id": "m:2f92713c",
            "userId": "org.couchdb.user:2f92713c",
            "type": "member",
            "name": "Paul May",
            "organizationId": "o:35ce9bc3"
        },
        "m:d2b71ec8": {
            "id": "m:d2b71ec8",
            "userId": "org.couchdb.user:d2b71ec8",
            "type": "member",
            "name": "Mark Rosales",
            "organizationId": "o:35ce9bc3"
        },
        "m:3a265722": {
            "id": "m:3a265722",
            "userId": "org.couchdb.user:3a265722",
            "type": "member",
            "name": "Jonathan Cohen",
            "organizationId": "o:35ce9bc3"
        },
        "m:7c7d3ecf": {
            "id": "m:7c7d3ecf",
            "userId": "org.couchdb.user:7c7d3ecf",
            "type": "member",
            "name": "Jonathan Jackson",
            "organizationId": "o:35ce9bc3"
        },
        "m:fbdd92bb": {
            "id": "m:fbdd92bb",
            "userId": "org.couchdb.user:fbdd92bb",
            "type": "member",
            "name": "Carlos Weiss",
            "organizationId": "o:35ce9bc3"
        },
        "m:6392ba45": {
            "id": "m:6392ba45",
            "userId": "org.couchdb.user:6392ba45",
            "type": "member",
            "name": "James Morrow",
            "organizationId": "o:35ce9bc3"
        },
        "m:4709e34f": {
            "id": "m:4709e34f",
            "userId": "org.couchdb.user:4709e34f",
            "type": "member",
            "name": "Christopher Crosby",
            "organizationId": "o:35ce9bc3"
        },
        "m:aee9aad9": {
            "id": "m:aee9aad9",
            "userId": "org.couchdb.user:aee9aad9",
            "type": "member",
            "name": "Joseph Mullen",
            "organizationId": "o:35ce9bc3"
        },
        "m:c3cbc830": {
            "id": "m:c3cbc830",
            "userId": "org.couchdb.user:c3cbc830",
            "type": "member",
            "name": "Vanessa Garcia",
            "organizationId": "o:35ce9bc3"
        }
    },
    "org_09bf8521_db": {
        "_design": {},
        "_local": {},
        "_security": {
            "members": {
                "roles": [],
                "names": []
            },
            "admins": {
                "roles": [],
                "names": [
                    "Margaret Watson",
                    "Kirk Smith",
                    "Crystal Moore",
                    "Max Smith",
                    "Nicholas Wilson",
                    "Sophia Duncan",
                    "Dr. Katherine Elliott DVM",
                    "Randy Henderson",
                    "Lisa Blackwell",
                    "David Soto"
                ]
            }
        },
        "m:19735110": {
            "id": "m:19735110",
            "userId": "org.couchdb.user:19735110",
            "type": "member",
            "name": "Margaret Watson",
            "organizationId": "o:09bf8521"
        },
        "m:064db5a3": {
            "id": "m:064db5a3",
            "userId": "org.couchdb.user:064db5a3",
            "type": "member",
            "name": "Kirk Smith",
            "organizationId": "o:09bf8521"
        },
        "m:026cfdc8": {
            "id": "m:026cfdc8",
            "userId": "org.couchdb.user:026cfdc8",
            "type": "member",
            "name": "Crystal Moore",
            "organizationId": "o:09bf8521"
        },
        "m:387904c4": {
            "id": "m:387904c4",
            "userId": "org.couchdb.user:387904c4",
            "type": "member",
            "name": "Max Smith",
            "organizationId": "o:09bf8521"
        },
        "m:260a6687": {
            "id": "m:260a6687",
            "userId": "org.couchdb.user:260a6687",
            "type": "member",
            "name": "Nicholas Wilson",
            "organizationId": "o:09bf8521"
        },
        "m:4f1187ad": {
            "id": "m:4f1187ad",
            "userId": "org.couchdb.user:4f1187ad",
            "type": "member",
            "name": "Sophia Duncan",
            "organizationId": "o:09bf8521"
        },
        "m:e236fbd5": {
            "id": "m:e236fbd5",
            "userId": "org.couchdb.user:e236fbd5",
            "type": "member",
            "name": "Dr. Katherine Elliott DVM",
            "organizationId": "o:09bf8521"
        },
        "m:dd1fb95b": {
            "id": "m:dd1fb95b",
            "userId": "org.couchdb.user:dd1fb95b",
            "type": "member",
            "name": "Randy Henderson",
            "organizationId": "o:09bf8521"
        },
        "m:f02b1603": {
            "id": "m:f02b1603",
            "userId": "org.couchdb.user:f02b1603",
            "type": "member",
            "name": "Lisa Blackwell",
            "organizationId": "o:09bf8521"
        },
        "m:8b557024": {
            "id": "m:8b557024",
            "userId": "org.couchdb.user:8b557024",
            "type": "member",
            "name": "David Soto",
            "organizationId": "o:09bf8521"
        }
    }
};