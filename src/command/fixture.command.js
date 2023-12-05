import providerService from "../service/provider.service.js";

export async function execute() {
    startWriter();

    const providers = providerService.getProviders();

    console.log(`📦 Found ${providers.length} providers`);
    console.log("------------------------------------------");
    console.log('');

    let fixtures = [];
    for (const providerUrl of providers) {
      console.log(`⏳ Fetching data from: ${providerUrl}`);
      
      try {
        await providerService
                .fetchFixtureByProvider(providerUrl)
                .then(_data => {
                  fixtures.push(..._data);
  
                  console.log(`👀 Find ${_data.length} records`);
                })
      } catch (error) {
        errorWriter(`Error fetching data from ${providerUrl}: ${error.message}`);
      }
      console.log('')
    }
}

function startWriter() {
    console.log("");
    console.log("------------------------------------------");
    console.log("💪 Start process");
    console.log("🕝 " + new Date().toString());
    console.log("------------------------------------------");
    console.log("");
}

function errorWriter(errorMessage) {
    console.log(`❗️ ${errorMessage}`);
}