import providerService from "../service/provider.service.js";

const startTime = new Date();

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
                    _data.forEach(function (_fixture) {
                        _fixture.providerUrl = providerUrl;
                    });
                    
                    fixtures.push(..._data);
                    console.log(`👀 Find ${_data.length} records`);
                })
      } catch (error) {
        errorWriter(`Fetching data from ${providerUrl}: ${error.message}`);
      }
      console.log('')
    }
    
    console.log(`🔎 Total ${fixtures.length} record found and ready progress`);
    console.log(`------------------------------------------`);
    
    for(const fixture of fixtures) {
      try {
        await providerService.createFixtureByProviderData(fixture);
      } catch (error) {
        errorWriter(`Error: ${error.message}`)
        console.log(`👉 Provider: ${fixture.providerUrl}`);
        console.log(`👉 Row: ${fixture.rowCount}`);
        console.log('');
      }
    }
    completedWriter();
}

function startWriter() {
  console.log("");
  console.log("------------------------------------------");
  console.log("💪 Start process");
  console.log("🕝 " + startTime.toString());
  console.log("------------------------------------------");
  console.log("");
}

function errorWriter(errorMessage) {
  console.log(`❗️ Error: ${errorMessage}`);
}

function completedWriter() {
  const completedTime = new Date();
  const processMilisecond = completedTime.getSeconds() - startTime.getSeconds();

  console.log("");
  console.log(`✅ Process completed in ~ ${processMilisecond}sec.`);
  process.exit();
}