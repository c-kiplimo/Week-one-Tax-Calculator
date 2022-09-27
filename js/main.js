
const netpay1 = document.querySelector('.netpay')
const nssfcontribution1 = document.querySelector('.nssfcontribution')
const taxableincome1 = document.querySelector('.taxableincome')
const taxbeforerelief1 = document.querySelector('.taxbeforerelief')
const personalrelief1 = document.querySelector('.personalrelief')
const insurancerelief1 = document.querySelector('.insurancerelief')
const paye1 = document.querySelector('.paye')
const nhifcontribution1 = document.querySelector('.nhifcontribution')

var nssfcontribution = 1080
var personalrelief = 2400
var insurancerelief = 210
var nhifcontribution = 1400

window.onload = function() {
    
    nssfcontribution1.innerText = nssfcontribution.toFixed(2)
    personalrelief1.innerText = personalrelief.toFixed(2)
    insurancerelief1.innerText = insurancerelief.toFixed(2)
    nhifcontribution1.innerText = nhifcontribution.toFixed(2)


  };
  
  function handleGrossSalary () {
    
    const grosssalary = document.getElementById('grosssalary').value
    console.log(grosssalary)
    
    //PAYE is chargeable to persons of employment income of Kshs.
    // 24,000 and above per month. 
    //Taxable pay = Gross - NSSF
    //PAYE before relief is calcualted from ==> Taxable pay
    //PAYE/ payable tax = tax before relief - all reliefs
    //Net Pay = Taxable - (PAYE + NHIF)
    if (grosssalary >= 24000) {
    //var nssf = grosssalary * 0.0040 //0.4 %
    var nssf = nssfcontribution
    nssfcontribution1.innerText = nssf.toFixed(2)
    var taxableincome = grosssalary - nssf;
    console.log(`taxableincome ${taxableincome}`)

    taxableincome1.innerText = taxableincome.toFixed(2)



    var taxbeforerelief = PAYE(taxableincome)
    console.log(`taxbeforerelief ${taxbeforerelief}`)

    taxbeforerelief1.innerText = taxbeforerelief.toFixed(2)



    var paye = taxbeforerelief - (personalrelief + insurancerelief)
    console.log(`paye ${paye}`)
    if(paye < 0) {
      paye = 00
    }

    paye1.innerText = paye.toFixed(2)



    var netpay = taxableincome - (paye + nhifcontribution)
    console.log(`Netpay ${netpay}`)

    netpay1.innerText = netpay.toFixed(2)
    }else {
      alert("Gross Salary Not Taxable")
    }
    
  }

  function PAYE (taxable) {
    var secondTaxBand = 0
    var firstTaxBand = 0
    var anyAbove = 0
    if (taxable){
        firstTaxBand = 24000 * 0.1
        console.log(`firstTaxband ${firstTaxBand}`);

        if(taxable >= 32333){
        secondTaxBand = 8333 * 0.25
        console.log(`SecondTaxBand ${secondTaxBand}`)
        }else{
            secondTaxBand = 0
        }
        if(taxable > 32333) {
        anyAbove = (taxable - 32333) * 0.3
        console.log(`anyAbove ${anyAbove}`)
        }else{
            anyAbove = 0 
        }

        var paye = firstTaxBand + secondTaxBand + anyAbove;
        console.log(`PayeBE ${paye}`)
        if(paye < 0) {
          paye = 0;
          return paye
        }else {
          return paye
        }
        

    }else {
      alert("Gross Pay Not Taxable")
        return taxable
    }
  }