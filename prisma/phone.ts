import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const phoneNumber = [
    {
        "phoneNumber": "+14079798514",
        "friendlyName": "Whatsapp 03",
        "sid": "PN6e77fcc9e02241d0c6d4175ce1bf6f96",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18447144600",
        "friendlyName": "do not use 2",
        "sid": "PN84980ae55bff3434e99610600b340e41",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892206599",
        "friendlyName": "Kelly Tatiana",
        "sid": "PN7eb5ffc5bafd307975f4142bcd4dca7a",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14076642646",
        "friendlyName": "Gaby",
        "sid": "PN7f8c620ec37d2deaac66a4e837977bdb",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14075432596",
        "friendlyName": "Customer Service - MAIN - Tree to forward to all agents",
        "sid": "PN026280e5bbf72de52366717e6a9fcd64",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [
            "MlJYdZILpJLv3lo4zais"
        ],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14076362141",
        "friendlyName": "Whatsapp 04",
        "sid": "PNe245a2b55bd797748bfc7281acc9fd2f",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14078097370",
        "friendlyName": "Whatsapp 05",
        "sid": "PN2a35d28afcac458b431c02f997abf6dd",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14075655871",
        "friendlyName": "Intro Department - MAIN - Tree to distribute to agents",
        "sid": "PN34c37637e0ccaea4159b628d15e18e9d",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [
            "8BRTac8gksu1hGHnmLvo",
            "3gh3NeGIXCn5VqGeOPJM"
        ],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18448997259",
        "friendlyName": "Main May 24 (+1 844-899-6966)",
        "sid": "PN04fcfc8286b9f389c88c53e4ac73eaad",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": true,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18448996966",
        "friendlyName": "Do no use 1",
        "sid": "PN0c8b3f3725623864315ca40546dae612",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14073056022",
        "friendlyName": "Whatsapp 01",
        "sid": "PNec5b3051bad70135111a6906d7a3e3ba",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedUser": "G7TdWu29wi8TGepLJUb8",
        "linkedRingAllUsers": [],
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14075888953",
        "friendlyName": "Oscar Eduardo",
        "sid": "PNcd2ed9991b9b91cbfdc5ae0a6229badc",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14072891471",
        "friendlyName": "Anita Medrano",
        "sid": "PNf6168bb92d0a06f92af6d3a5de322edf",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18447417819",
        "sid": "PN18a54a1e2bb79beef6d2ed7d0bc41e06",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14078051680",
        "friendlyName": "Florencia Ponce",
        "sid": "PN21307d0c4a0056ba876c52f43a87a9b9",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892201370",
        "friendlyName": "Maria Monroy",
        "sid": "PN27789f73f6465d5e8331c467948b6010",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14073057344",
        "friendlyName": "Tatiana",
        "sid": "PN32b6e131cb697bdd5e48e496ce57248b",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14076122629",
        "friendlyName": "empty123",
        "sid": "PNf43f3145a4dae2a63708e37888cd333d",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892202672",
        "friendlyName": "Matt",
        "sid": "PN2fedf874f8e9a36d550e9b140f29b33b",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14079173179",
        "friendlyName": "Whatsapp 02",
        "sid": "PN5344201b52b3cb4307cc9130c795315a",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [
            "G7TdWu29wi8TGepLJUb8",
            "E9LLJkl7A8sv08Q8cCya"
        ],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18889870214",
        "friendlyName": "Main August 2024 (888-987-0214)",
        "sid": "PN810758a6ddb171f65ec1b4fb5f3c3a1b",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14073781601",
        "friendlyName": "Gabriel",
        "sid": "PN67391c3a0b56f6309592a4a0ead35ab5",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14079743405",
        "friendlyName": "empty 123456",
        "sid": "PN46130353251def469edf27682a7dfc08",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+13212042919",
        "friendlyName": "Leomarys",
        "sid": "PNc48b17316f2f2f04da96f08df1f4e5fa",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14079014364",
        "friendlyName": "Wagner",
        "sid": "PN446806ab510fe9d06868ff5d2e15f965",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14079744629",
        "friendlyName": "Angela V",
        "sid": "PN390e51a2e8498c2d511d1687fe2e2625",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14072890920",
        "friendlyName": "Angela Machado",
        "sid": "PNec9cefaa0e558f461fe8cf06bbb9715d",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14076342082",
        "friendlyName": "Maria Victoria",
        "sid": "PN6928d922494e66b09e7e330ee18f4055",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+18557256650",
        "sid": "PNecd8ad0e8cca8f86c83ab974cc9ae6b1",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "tollFree",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14079173875",
        "friendlyName": "empty12345",
        "sid": "PN2beab6d5f2ae5cbc4080ac3b01abfa21",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892196228",
        "friendlyName": "BOT",
        "sid": "PN45bc55b167f28c1b34775b465762b387",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892207590",
        "friendlyName": "Misael2",
        "sid": "PN0efdbd4915f29a00cf5fc977a9242bbb",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+16892203887",
        "sid": "PN21e893be57b3610b707a211fa1ac0dd8",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    },
    {
        "phoneNumber": "+14077437649",
        "friendlyName": "Fabricio Sitto",
        "sid": "PN95bab6d7efd67d144d4efa45460e4de5",
        "countryCode": "US",
        "capabilities": {
            "fax": false,
            "voice": true,
            "sms": true,
            "mms": true
        },
        "type": "local",
        "isDefaultNumber": false,
        "linkedRingAllUsers": [],
        "forwardingNumber": "",
        "isGroupConversationEnabled": true
    }

]
async function main() {
    const dataToInsert = phoneNumber.map(phoneNumber => ({
        phoneNumber: phoneNumber.phoneNumber,
        friendlyName: phoneNumber.friendlyName || "Default Name", 
        sid: phoneNumber.sid,
        countryCode: phoneNumber.countryCode,
        }));
    await prisma.phoneNumber.createMany({
            data: dataToInsert,
        });


        console.log('Phone added!');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });