const currencyDetails = {
  AED: { name: "United Arab Emirates Dirham", country: "United Arab Emirates" },
  AFN: { name: "Afghan Afghani", country: "Afghanistan" },
  ALL: { name: "Albanian Lek", country: "Albania" },
  AMD: { name: "Armenian Dram", country: "Armenia" },
  ANG: { name: "Netherlands Antillean Guilder", country: "Curaçao, Sint Maarten" },
  AOA: { name: "Angolan Kwanza", country: "Angola" },
  ARS: { name: "Argentine Peso", country: "Argentina" },
  AUD: { name: "Australian Dollar", country: "Australia" },
  AWG: { name: "Aruban Florin", country: "Aruba" },
  AZN: { name: "Azerbaijani Manat", country: "Azerbaijan" },
  BAM: { name: "Bosnia-Herzegovina Convertible Mark", country: "Bosnia and Herzegovina" },
  BBD: { name: "Barbadian Dollar", country: "Barbados" },
  BDT: { name: "Bangladeshi Taka", country: "Bangladesh" },
  BGN: { name: "Bulgarian Lev", country: "Bulgaria" },
  BHD: { name: "Bahraini Dinar", country: "Bahrain" },
  BIF: { name: "Burundian Franc", country: "Burundi" },
  BMD: { name: "Bermudian Dollar", country: "Bermuda" },
  BND: { name: "Brunei Dollar", country: "Brunei" },
  BOB: { name: "Bolivian Boliviano", country: "Bolivia" },
  BRL: { name: "Brazilian Real", country: "Brazil" },
  BSD: { name: "Bahamian Dollar", country: "Bahamas" },
  BTN: { name: "Bhutanese Ngultrum", country: "Bhutan" },
  BWP: { name: "Botswana Pula", country: "Botswana" },
  BYN: { name: "Belarusian Ruble", country: "Belarus" },
  BZD: { name: "Belize Dollar", country: "Belize" },
  CAD: { name: "Canadian Dollar", country: "Canada" },
  CDF: { name: "Congolese Franc", country: "Democratic Republic of the Congo" },
  CHF: { name: "Swiss Franc", country: "Switzerland, Liechtenstein" },
  CLP: { name: "Chilean Peso", country: "Chile" },
  CNY: { name: "Chinese Yuan", country: "China" },
  COP: { name: "Colombian Peso", country: "Colombia" },
  CRC: { name: "Costa Rican Colón", country: "Costa Rica" },
  CUC: { name: "Cuban Convertible Peso", country: "Cuba" },
  CUP: { name: "Cuban Peso", country: "Cuba" },
  CVE: { name: "Cape Verdean Escudo", country: "Cape Verde" },
  CZK: { name: "Czech Koruna", country: "Czech Republic" },
  DJF: { name: "Djiboutian Franc", country: "Djibouti" },
  DKK: { name: "Danish Krone", country: "Denmark, Faroe Islands" },
  DOP: { name: "Dominican Peso", country: "Dominican Republic" },
  DZD: { name: "Algerian Dinar", country: "Algeria" },
  EGP: { name: "Egyptian Pound", country: "Egypt" },
  ERN: { name: "Eritrean Nakfa", country: "Eritrea" },
  ETB: { name: "Ethiopian Birr", country: "Ethiopia" },
  EUR: { name: "Euro", country: "Eurozone" },
  FJD: { name: "Fijian Dollar", country: "Fiji" },
  FKP: { name: "Falkland Islands Pound", country: "Falkland Islands" },
  FOK: { name: "Faroese Króna", country: "Faroe Islands" },
  GBP: { name: "British Pound Sterling", country: "United Kingdom" },
  GEL: { name: "Georgian Lari", country: "Georgia" },
  GHS: { name: "Ghanaian Cedi", country: "Ghana" },
  GIP: { name: "Gibraltar Pound", country: "Gibraltar" },
  GMD: { name: "Gambian Dalasi", country: "Gambia" },
  GNF: { name: "Guinean Franc", country: "Guinea" },
  GTQ: { name: "Guatemalan Quetzal", country: "Guatemala" },
  GYD: { name: "Guyanese Dollar", country: "Guyana" },
  HKD: { name: "Hong Kong Dollar", country: "Hong Kong" },
  HNL: { name: "Honduran Lempira", country: "Honduras" },
  HRK: { name: "Croatian Kuna", country: "Croatia" },
  HTG: { name: "Haitian Gourde", country: "Haiti" },
  HUF: { name: "Hungarian Forint", country: "Hungary" },
  IDR: { name: "Indonesian Rupiah", country: "Indonesia" },
  ILS: { name: "Israeli New Shekel", country: "Israel" },
  INR: { name: "Indian Rupee", country: "India" },
  IQD: { name: "Iraqi Dinar", country: "Iraq" },
  IRR: { name: "Iranian Rial", country: "Iran" },
  ISK: { name: "Icelandic Króna", country: "Iceland" },
  JMD: { name: "Jamaican Dollar", country: "Jamaica" },
  JOD: { name: "Jordanian Dinar", country: "Jordan" },
  JPY: { name: "Japanese Yen", country: "Japan" },
  KES: { name: "Kenyan Shilling", country: "Kenya" },
  KGS: { name: "Kyrgyzstani Som", country: "Kyrgyzstan" },
  KHR: { name: "Cambodian Riel", country: "Cambodia" },
  KID: { name: "Kiribati Dollar", country: "Kiribati" },
  KMF: { name: "Comorian Franc", country: "Comoros" },
  KRW: { name: "South Korean Won", country: "South Korea" },
  KWD: { name: "Kuwaiti Dinar", country: "Kuwait" },
  KYD: { name: "Cayman Islands Dollar", country: "Cayman Islands" },
  KZT: { name: "Kazakhstani Tenge", country: "Kazakhstan" },
  LAK: { name: "Lao Kip", country: "Laos" },
  LBP: { name: "Lebanese Pound", country: "Lebanon" },
  LKR: { name: "Sri Lankan Rupee", country: "Sri Lanka" },
  LRD: { name: "Liberian Dollar", country: "Liberia" },
  LSL: { name: "Lesotho Loti", country: "Lesotho" },
  LYD: { name: "Libyan Dinar", country: "Libya" },
  MAD: { name: "Moroccan Dirham", country: "Morocco" },
  MDL: { name: "Moldovan Leu", country: "Moldova" },
  MGA: { name: "Malagasy Ariary", country: "Madagascar" },
  MKD: { name: "Macedonian Denar", country: "North Macedonia" },
  MMK: { name: "Burmese Kyat", country: "Myanmar" },
  MNT: { name: "Mongolian Tögrög", country: "Mongolia" },
  MOP: { name: "Macanese Pataca", country: "Macau" },
  MRU: { name: "Mauritanian Ouguiya", country: "Mauritania" },
  MUR: { name: "Mauritian Rupee", country: "Mauritius" },
  MVR: { name: "Maldivian Rufiyaa", country: "Maldives" },
  MWK: { name: "Malawian Kwacha", country: "Malawi" },
  MXN: { name: "Mexican Peso", country: "Mexico" },
  MYR: { name: "Malaysian Ringgit", country: "Malaysia" },
  MZN: { name: "Mozambican Metical", country: "Mozambique" },
  NAD: { name: "Namibian Dollar", country: "Namibia" },
  NGN: { name: "Nigerian Naira", country: "Nigeria" },
  NIO: { name: "Nicaraguan Córdoba", country: "Nicaragua" },
  NOK: { name: "Norwegian Krone", country: "Norway" },
  NPR: { name: "Nepalese Rupee", country: "Nepal" },
  NZD: { name: "New Zealand Dollar", country: "New Zealand" },
  OMR: { name: "Omani Rial", country: "Oman" },
  PAB: { name: "Panamanian Balboa", country: "Panama" },
  PEN: { name: "Peruvian Sol", country: "Peru" },
  PGK: { name: "Papua New Guinean Kina", country: "Papua New Guinea" },
  PHP: { name: "Philippine Peso", country: "Philippines" },
  PKR: { name: "Pakistani Rupee", country: "Pakistan" },
  PLN: { name: "Polish Złoty", country: "Poland" },
  PYG: { name: "Paraguayan Guaraní", country: "Paraguay" },
  QAR: { name: "Qatari Riyal", country: "Qatar" },
  RON: { name: "Romanian Leu", country: "Romania" },
  RSD: { name: "Serbian Dinar", country: "Serbia" },
  RUB: { name: "Russian Ruble", country: "Russia" },
  RWF: { name: "Rwandan Franc", country: "Rwanda" },
  SAR: { name: "Saudi Riyal", country: "Saudi Arabia" },
  SBD: { name: "Solomon Islands Dollar", country: "Solomon Islands" },
  SCR: { name: "Seychellois Rupee", country: "Seychelles" },
  SDG: { name: "Sudanese Pound", country: "Sudan" },
  SEK: { name: "Swedish Krona", country: "Sweden" },
  SGD: { name: "Singapore Dollar", country: "Singapore" },
  SHP: { name: "Saint Helena Pound", country: "Saint Helena" },
  SLL: { name: "Sierra Leonean Leone", country: "Sierra Leone" },
  SOS: { name: "Somali Shilling", country: "Somalia" },
  SRD: { name: "Surinamese Dollar", country: "Suriname" },
  SSP: { name: "South Sudanese Pound", country: "South Sudan" },
  STN: { name: "São Tomé and Príncipe Dobra", country: "São Tomé and Príncipe" },
  SYP: { name: "Syrian Pound", country: "Syria" },
  SZL: { name: "Swazi Lilangeni", country: "Eswatini" },
  THB: { name: "Thai Baht", country: "Thailand" },
  TJS: { name: "Tajikistani Somoni", country: "Tajikistan" },
  TMT: { name: "Turkmenistan Manat", country: "Turkmenistan" },
  TND: { name: "Tunisian Dinar", country: "Tunisia" },
  TOP: { name: "Tongan Paʻanga", country: "Tonga" },
  TRY: { name: "Turkish Lira", country: "Turkey" },
  TTD: { name: "Trinidad and Tobago Dollar", country: "Trinidad and Tobago" },
  TVD: { name: "Tuvaluan Dollar", country: "Tuvalu" },
  TWD: { name: "New Taiwan Dollar", country: "Taiwan" },
  TZS: { name: "Tanzanian Shilling", country: "Tanzania" },
  UAH: { name: "Ukrainian Hryvnia", country: "Ukraine" },
  UGX: { name: "Ugandan Shilling", country: "Uganda" },
  USD: { name: "United States Dollar", country: "United States" },
  UYU: { name: "Uruguayan Peso", country: "Uruguay" },
  UZS: { name: "Uzbekistani Som", country: "Uzbekistan" },
  VES: { name: "Venezuelan Bolívar Soberano", country: "Venezuela" },
  VND: { name: "Vietnamese Dong", country: "Vietnam" },
  VUV: { name: "Vanuatu Vatu", country: "Vanuatu" },
  WST: { name: "Samoan Tala", country: "Samoa" },
  XAF: { name: "Central African CFA Franc", country: "Central African States" },
  XCD: { name: "East Caribbean Dollar", country: "Eastern Caribbean States" },
  XOF: { name: "West African CFA Franc", country: "West African States" },
  XPF: { name: "CFP Franc", country: "French Polynesia, New Caledonia, Wallis and Futuna" },
  YER: { name: "Yemeni Rial", country: "Yemen" },
  ZAR: { name: "South African Rand", country: "South Africa" },
  ZMW: { name: "Zambian Kwacha", country: "Zambia" },
  ZWL: { name: "Zimbabwean Dollar", country: "Zimbabwe" }
};



const fromCurrency = document.getElementById('fromCurrency'); 
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

const customSearchFrom = document.getElementById('customSearchFrom');
const customSearchTo = document.getElementById('customSearchTo');

const swapBtn = document.getElementById('swapBtn');
const spinner = convertBtn.querySelector('.spinner');
const btnText = convertBtn.querySelector('.btn-text');

// Populate dropdowns with label including country name
for (const code in currencyDetails) {
  const { name, country } = currencyDetails[code];
  const label = `${name} (${country}) - ${code}`;
  const option1 = new Option(label, code);
  const option2 = new Option(label, code);
  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
}

// Initialize Select2
$(document).ready(function () {
  $('#fromCurrency').select2({
    width: '100%',
    placeholder: 'Select currency',
    allowClear: true,
  });

  $('#toCurrency').select2({
    width: '100%',
    placeholder: 'Select currency',
    allowClear: true,
  });

  updateCustomInput('from');
  updateCustomInput('to');
});

// Function to get label by code
function getLabel(code) {
  if (!code || !currencyDetails[code]) return '';
  const { name, country } = currencyDetails[code];
  return `${name} (${country}) - ${code}`;
}

// Update custom search inputs
function updateCustomInput(type) {
  if (type === 'from') {
    const val = $('#fromCurrency').val();
    customSearchFrom.value = getLabel(val);
  } else if (type === 'to') {
    const val = $('#toCurrency').val();
    customSearchTo.value = getLabel(val);
  }
}

// Listen for changes to update inputs
$('#fromCurrency').on('change', () => {
  updateCustomInput('from');
  resultDiv.innerText = '';
});
$('#toCurrency').on('change', () => {
  updateCustomInput('to');
  resultDiv.innerText = '';
});

// Input filters on typing
customSearchFrom.addEventListener('input', () => {
  const val = customSearchFrom.value;
  $('#fromCurrency').select2('open');
  $('.select2-search__field').val(val).trigger('input');
});

customSearchTo.addEventListener('input', () => {
  const val = customSearchTo.value;
  $('#toCurrency').select2('open');
  $('.select2-search__field').val(val).trigger('input');
});

// Swap currencies
swapBtn.addEventListener('click', () => {
  const fromVal = fromCurrency.value;
  const toVal = toCurrency.value;

  $('#fromCurrency').val(toVal).trigger('change');
  $('#toCurrency').val(fromVal).trigger('change');

  resultDiv.innerText = '';
});

// Loading state handlers
function showLoading() {
  convertBtn.classList.add('loading');
  spinner.style.display = 'inline-block';
  btnText.textContent = 'Converting...';
  convertBtn.disabled = true;
}

function hideLoading() {
  convertBtn.classList.remove('loading');
  spinner.style.display = 'none';
  btnText.textContent = 'Convert';
  convertBtn.disabled = false;
}

// Conversion logic with loading
convertBtn.addEventListener('click', async () => {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);
  const API_KEY = 'e159039d183bbbf7f560cdd5'; // replace with your actual API key

  if (!from || !to || isNaN(amount) || amount <= 0) {
    resultDiv.innerText = 'Please fill all fields correctly with a positive amount.';
    return;
  }

  showLoading();

  try {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
    );
    const data = await res.json();

    if (data.result === 'success') {
      const rate = data.conversion_rates[to];
      const converted = (rate * amount).toFixed(2);
      resultDiv.innerText = `${amount} ${from} = ${converted} ${to}`;
    } else {
      resultDiv.innerText = 'Conversion failed. Try again later.';
    }
  } catch (err) {
    console.error(err);
    resultDiv.innerText = 'Error fetching data.';
  }

  hideLoading();
});
