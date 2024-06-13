const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

const PORT = 3000
const app = express()

// Enable CORS for your frontend origin
app.use(cors({
    origin: 'https://www.resolverconsult-panel.com/',
    methods: ['GET', 'POST']
}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('you have hit the evms proxy endpoint. Hello there...!!!')
})

app.get('/proxy', async (req, res) => {
    const { symbols } = req.query;
    const cmcApiKey = '79793165-e81c-4d16-bc14-3dd9c177285e';
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbols}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'X-CMC_PRO_API_KEY': cmcApiKey,
                'Content-Type': 'application/json'
            }
        });

        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/proxy/merlinscan', async (req, res) => {
    const merlinapikey = 'd52215ab-0017-4c01-a56b-b8bf4f08c921';
    const { account } = req.query;
    const url = `https://scan.merlinchain.io/api?module=account&action=addresstokennftbalance&address=${account}&page=1&offset=100&api_key=${merlinapikey}`
    try {
        const response = await axios.get(url)
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could not complete merlin scan request: ', error)
    }
})

app.get('/proxy/platon', async (req, res) => {
    const { account } = req.query;
     //GLOBAL VARIABLES
     const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
     const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
     const url = 'https://rpc.particle.network/evm-chain'
     const options = {
         chainId: 100,
         jsonrpc: '2.0',
         id: 1,
         method: 'particle_getTokens',
         params: [account],
     }
     const auth = {
         username: particleprojectid,
         password: particleprojectserverkey,
     }
     try {
         const response = await axios.post(url, options, {
            auth: auth,
            headers: {
                'Content-Type': 'application/json'
            }
         })
         console.log(response.data)
         res.json(response.data)
     } catch (error) {
         console.log('Could Not fetch Platon Tokens: ', error)
     }
})

app.get('/proxy/avalanche', async(req, res) => {
    const { account } = req.query;
     //GLOBAL VARIABLES
     const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
     const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
     const url = 'https://rpc.particle.network/evm-chain'
     const options = {
         chainId: 43114,
         jsonrpc: '2.0',
         id: 1,
         method: 'particle_getTokens',
         params: [account],
     }
     const auth = {
         username: particleprojectid,
         password: particleprojectserverkey,
     }
     try {
         const response = await axios.post(url, options, {
            auth: auth,
            headers: {
                'Content-Type': 'application/json'
            }
         })
         console.log(response.data)
         res.json(response.data)
     } catch (error) {
         console.log('Could Not fetch Platon Tokens: ', error)
     }
})


app.get('/proxy/heco', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 128,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})


app.get('/proxy/smartbch', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 10000,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})


app.get('/proxy/conflux', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 1030,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})

app.get('/proxy/metis', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 1088,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})


app.get('/proxy/harmony', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 1666600000,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})

app.get('/proxy/klaytn', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 8217,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})

app.get('/proxy/okx', async (req, res) => {
    const { account } = req.query;
    const url = `https://www.oklink.com/api/v5/explorer/eth/api?module=account&action=tokentx&address=${account}&startblock=19153000&endblock=19153162&sort=asc`;
    const okxapikey = '5d00ecef-0dbf-4e1e-8b31-d74e91064f3c'
    const headers = {
        'Ok-Access-Key': okxapikey,
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        console.error('Could not fetch OKX tokens:', error);
        res.status(500).json({ error: 'Failed to fetch token data' });
    }

})

app.get('/proxy/manta', async (req, res) => {
    const { account } = req.query;
    const url = `https://www.oklink.com/api/v5/explorer/eth/api?module=account&action=tokentx&address=${account}&startblock=19153000&endblock=19153162&sort=asc`;
    const okxapikey = '5d00ecef-0dbf-4e1e-8b31-d74e91064f3c'
    const headers = {
        'Ok-Access-Key': okxapikey,
        'Content-Type': 'application/json'
    };

    try {
        const response = await axios.get(url, { headers });
        res.json(response.data);
    } catch (error) {
        console.error('Could not fetch OKX tokens:', error);
        res.status(500).json({ error: 'Failed to fetch token data' });
    }

})


app.get('/proxy/mantle', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 5000,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})


app.get('/proxy/aurora', async (req, res) => {
    const { account } = req.query;
    //GLOBAL VARIABLES
    const particleprojectid = 'aabbcf0e-e728-42bb-b6ed-f50be0154e20';
    const particleprojectserverkey = 's7UZZFHoE7koeD9Pw8lLDZyxMgCY36rngiGL3tLF';
    const url = 'https://rpc.particle.network/evm-chain'
    const options = {
        chainId: 1313161554,
        jsonrpc: '2.0',
        id: 1,
        method: 'particle_getTokens',
        params: [account],
    }
    const auth = {
        username: particleprojectid,
        password: particleprojectserverkey,
    }
    try {
        const response = await axios.post(url, options, {
           auth: auth,
           headers: {
               'Content-Type': 'application/json'
           }
        })
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.log('Could Not fetch Platon Tokens: ', error)
    }
})

app.listen(PORT, () => {
    console.log(`Proxy server listening at http://localhost:${PORT}`);
});