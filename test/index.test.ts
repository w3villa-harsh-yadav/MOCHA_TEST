import { expect } from 'chai';

const {callApi} = require('../src/index');
const base_url = require('../constants/base-url');
const headers = require('../constants/headers');
const urls = require('../constants/urls');
const MAINTENANCE = false;

if(MAINTENANCE){
    console.log("::::::::::::SERVER IN MAINTENANCE:::::::::::::");
}

describe('GAME-READER-API',()=>{
    const baseUrl = base_url.quickdev2.GAME_READER_URL;
    const GAME_READER_API = urls.GAME_READER_URLS
    const apis = Object.keys(GAME_READER_API);

    it("Unauthorized API", async()=>{
        const url = baseUrl+urls.GAME_READER_URLS.leaderboard.url;
        const method = urls.GAME_READER_URLS.leaderboard.method;
        const body = urls.GAME_READER_URLS.leaderboard.body;
        const data = await callApi(url,method,{},body);
        expect(data).to.equal("Unauthorized");
    });

    // Looping through the Game Reader Apis

    apis.map( (keys) => {
        it(`${GAME_READER_API[keys].name}`, async () => {
            const url = baseUrl+GAME_READER_API[keys].url;
            const method = GAME_READER_API[keys].method;
            const body = GAME_READER_API[keys].body;
            const data = await callApi(url,method,headers,body);
            console.log(`${GAME_READER_API[keys].name}:::`,data);
            if( MAINTENANCE ) {
                expect(data).to.have.own.property("success",false);
                expect(data).to.have.own.property("message");
                expect(data).to.have.own.property("data");
                expect(data).to.have.own.property("display");
            } else {
                expect(data).to.have.own.property("success",true);
                expect(data).to.have.own.property("message");
                expect(data).to.have.own.property("data");
                expect(data).to.have.own.property("display");
            }
        });
    })
})


describe('GAME-WRITER-API',()=>{
    const baseUrl = base_url.quickdev2.GAME_WRITER_URL;
    const GAME_WRITER_API = urls.GAME_WRITER_URLS
    const apis = Object.keys(GAME_WRITER_API);

    it("Unauthorized API", async()=>{
        const url = baseUrl+urls.GAME_WRITER_URLS.joinlobby.url;
        const method = urls.GAME_WRITER_URLS.joinlobby.method;
        const body = urls.GAME_WRITER_URLS.joinlobby.body;
        const data = await callApi(url,method,{},body);
        expect(data).to.equal("Unauthorized");
    });

    // Looping through the Game Writer Apis

    apis.map( (keys) => {
        it(`${GAME_WRITER_API[keys].name}`, async () => {
            const url = baseUrl+GAME_WRITER_API[keys].url;
            const method = GAME_WRITER_API[keys].method;
            const body = GAME_WRITER_API[keys].body;
            const data = await callApi(url,method,headers,body);
            console.log(`${GAME_WRITER_API[keys].name}:::`,data);
            if( MAINTENANCE ) {
                expect(data).to.have.own.property("success",false);
                expect(data).to.have.own.property("message");
                expect(data).to.have.own.property("data");
                expect(data).to.have.own.property("display");
            } else {
                expect(data).to.have.own.property("success",true);
                expect(data).to.have.own.property("message");
                expect(data).to.have.own.property("data");
                expect(data).to.have.own.property("display");
            }
        });
    })
})

