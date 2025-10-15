import axios from 'axios';

const testPlaceIds = [
  '7041939546',  // Catalog Avatar Creator
  '133120777017776'  // The Church Of Spawnism
];

async function testUniverseIdConversion(placeId) {
  try {
    console.log(`\nTesting placeId: ${placeId}`);
    const response = await axios.get(`https://apis.roblox.com/universes/v1/places/${placeId}/universe`);
    console.log('✓ UniverseId:', response.data.universeId);
    return response.data.universeId;
  } catch (error) {
    console.error('✗ Error getting universeId:', error.response?.status, error.response?.data || error.message);
    return null;
  }
}

async function testGameDetails(universeId) {
  try {
    console.log(`Testing universeId: ${universeId}`);
    const response = await axios.get(`https://games.roblox.com/v1/games`, {
      params: { universeIds: universeId }
    });
    console.log('✓ Game name:', response.data.data[0]?.name);
    console.log('✓ Players:', response.data.data[0]?.playing);
    console.log('✓ Visits:', response.data.data[0]?.visits);
  } catch (error) {
    console.error('✗ Error getting game details:', error.response?.status, error.response?.data || error.message);
  }
}

async function runTests() {
  console.log('=== Testing Roblox API Direct Access ===\n');
  
  for (const placeId of testPlaceIds) {
    const universeId = await testUniverseIdConversion(placeId);
    if (universeId) {
      await testGameDetails(universeId);
    }
    console.log('---');
  }
}

runTests();
