import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';

// proxyList as strings "ip:port"


const proxyList = [
    "123.141.181.49:5031",     // Korea (Republic of)
    "84.39.112.144:3128",      // Switzerland (Zurich)
    "46.29.162.222:80",        // Russia (Moscow)
    "8.211.42.167:8081",       // Germany (Frankfurt am Main)
    "141.101.123.238:80",      // United States (San Francisco)
    "172.67.192.6:80",         // United States (San Francisco)
    "45.131.4.232:80",         // Belize (Belize City)
    "154.16.146.43:80",        // United States (Buffalo)
    "172.67.176.3:80",         // United States (San Francisco)
    "172.67.70.109:80",        // United States (San Francisco)
    "45.131.208.93:80",        // Belize (Belize City)
    "141.101.123.106:80",      // United States (San Francisco)
    "66.235.200.62:80",        // United States (Jacksonville)
    "141.101.120.46:80",       // United States (San Francisco)
    "31.43.179.186:80",        // Kazakhstan (Almaty)
    "45.194.53.72:80",         // United States (Phoenix)
    "141.101.120.153:80",      // United States (San Francisco)
    "172.67.185.157:80",       // United States (San Francisco)
    "45.12.31.82:80",          // Belgium (Brussels)
    "185.162.231.35:80",       // United Kingdom (London)
    "172.67.192.9:80",         // United States (San Francisco)
    "172.67.0.24:80",          // United States (San Francisco)
    "185.162.231.77:80",       // United Kingdom (London)
    "141.101.122.25:80",       // United States (San Francisco)
    "159.112.235.41:80",       // United States (Pittsburgh)
    "185.238.228.29:80",       // United Kingdom (Saint Albans)
    "63.141.128.230:80",       // United States (Austin)
    "185.162.230.50:80",       // United Kingdom (London)
    "188.114.99.193:80",       // United States (San Francisco)
    "45.131.6.186:80",         // Belize (Belize City)
    "45.131.4.212:80",         // Belize (Belize City)
    "172.67.3.140:80",         // United States (San Francisco)
    "5.10.246.93:80",          // United Kingdom (London)
    "45.131.208.97:80",        // Belize (Belize City)
    "172.67.212.208:80",       // United States (San Francisco)
    "172.67.171.211:80",       // United States (San Francisco)
    "66.235.200.202:80",       // United States (Jacksonville)
    "185.170.166.76:80",       // Netherlands (Willemstad)
    "104.17.239.10:80",        // United States (San Francisco)
    "185.162.229.93:80",       // United Kingdom (London)
    "172.67.0.10:80",          // United States (San Francisco)
    "185.170.166.14:80",       // Netherlands (Willemstad)
    "141.101.120.241:80",      // United States (San Francisco)
    "164.38.155.13:80",        // United Kingdom (Hempstead)
    "47.238.134.126:14",       // Hong Kong (Socks4)
    "45.12.30.237:80",         // Belgium (Brussels)
    "154.65.39.7:80",          // United Kingdom (No City)
    "172.64.147.72:80",        // United States (San Francisco)
    "45.12.30.150:80",         // Belgium (Brussels)
    "23.227.38.198:80"         // Canada
];


// Test a single proxy
async function testProxy(proxyStr) {
    const proxyUrl = `http://${proxyStr}`;
    const agent = new HttpsProxyAgent(proxyUrl);

    try {
        const response = await axios.get('https://api.ipify.org?format=json', {
            httpAgent: agent,
            timeout: 900,//
        });
        console.log(`✅ Proxy ${proxyUrl} works. IP detected: ${response.data.ip}`);
        return true;
    } catch (error) {
        console.log(`❌ Proxy ${proxyUrl} failed: ${error.message}`);
        return false;
    }
}

(async () => {
    for (const proxy of proxyList) {
        await testProxy(proxy);
    }
})();
