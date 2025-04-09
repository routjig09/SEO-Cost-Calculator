function calculateCost() {
    // Get user inputs
    const websiteType = document.getElementById('websiteType').value;
    const numPages = parseInt(document.getElementById('numPages').value);
    const competitionLevel = document.getElementById('competitionLevel').value;
  
    // Base cost based on website type
    let baseCost;
    switch (websiteType) {
      case 'blog':
        baseCost = 500;
        break;
      case 'ecommerce':
        baseCost = 1000;
        break;
      case 'corporate':
        baseCost = 1500;
        break;
      default:
        baseCost = 0;
    }
  
    // Adjust cost based on number of pages
    const pageCost = numPages * 50;
  
    // Adjust cost based on competition level
    let competitionMultiplier;
    switch (competitionLevel) {
      case 'low':
        competitionMultiplier = 1;
        break;
      case 'medium':
        competitionMultiplier = 1.5;
        break;
      case 'high':
        competitionMultiplier = 2;
        break;
      default:
        competitionMultiplier = 1;
    }
  
    // Calculate total cost
    const totalCost = (baseCost + pageCost) * competitionMultiplier;
  
    // Display result
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `Your estimated SEO cost is: <strong>$${totalCost.toFixed(2)}</strong> 💸`;
  }