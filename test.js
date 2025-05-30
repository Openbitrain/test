import axios from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';

// proxyList as strings "ip:port"


const proxyList = [
  "104.237.250.13:80",       // Transparent
  "159.65.230.46:8888",      // Transparent
  "142.93.202.130:3128",     // Transparent
  "47.89.184.18:3128",       // Transparent
  "23.237.210.82:80",        // Transparent (HTTPS)
  "91.227.248.40:80",        // Transparent
  "192.81.129.252:3132",     // Transparent (HTTPS)
  "51.254.78.223:80",        // Transparent
  "51.15.228.52:8080",       // Transparent
  "152.228.154.20:80",       // Transparent
  "98.64.128.182:3128",      // Transparent
  "49.12.216.1:80",          // Transparent
  "103.253.103.50:80",       // Transparent (Japan)
  "47.91.65.23:3128",        // Transparent (Germany)
  "94.142.139.119:31280",    // Transparent (Russia, HTTPS)
  "91.239.7.75:80",          // Transparent (France)
  "91.239.7.66:80",          // Transparent (France)
  "194.183.190.10:8080",     // Transparent (Ukraine, HTTPS)
  "38.7.197.5:999",          // Transparent (United States, HTTPS)
  "45.204.9.197:9999",       // Transparent (South Africa)
  "185.105.102.179:80",      // Transparent (Iran)
  "104.248.81.109:3128",     // Transparent (United States, HTTPS)
  "185.105.102.189:80",      // Transparent (Iran)
  "38.250.126.201:999",      // Transparent (United States, HTTPS)
  "41.254.63.14:8080",       // Transparent (Libya, HTTPS)
  "185.141.213.174:8080",    // Transparent (Iran)
  "175.116.194.101:3128",    // Transparent (Korea, HTTPS)
  "180.89.56.240:3128",      // Transparent (China)
  "77.75.95.14:80",          // Transparent (Lebanon)
  "149.86.142.84:8080",      // Transparent (United States)
  "112.126.68.169:8384",     // Transparent (China)
  "104.129.194.46:10089",    // Transparent (United States, HTTPS)
  "8.146.207.243:8888",      // Transparent (United States)
  "8.140.104.98:3128",       // Transparent (United States)
  "106.12.156.26:80",        // Transparent (China)
];

// Test a single proxy
async function testProxy(proxyStr) {
    const proxyUrl = `http://${proxyStr}`;
    const agent = new HttpsProxyAgent(proxyUrl);

    try {
        const response = await axios.get('https://api.ipify.org?format=json', {
            httpAgent: agent,
            timeout: 1000,
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
