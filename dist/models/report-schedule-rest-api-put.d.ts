/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ReportRecipient } from './report-recipient';
import { ValidatorConfigJSON } from './validator-config-json';
/**
 *
 * @export
 * @interface ReportScheduleRestApiPut
 */
export interface ReportScheduleRestApiPut {
    /**
     *
     * @type {boolean}
     * @memberof ReportScheduleRestApiPut
     */
    active?: boolean;
    /**
     *
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    chart?: number | null;
    /**
     * Markdown description
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    contextMarkdown?: string | null;
    /**
     * Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.
     * @type {any}
     * @memberof ReportScheduleRestApiPut
     */
    creationMethod?: any | null;
    /**
     * A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    crontab?: string;
    /**
     *
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    dashboard?: number | null;
    /**
     *
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    database?: number;
    /**
     * Use a nice description to give context to this Alert/Report
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    description?: string | null;
    /**
     *
     * @type {any}
     * @memberof ReportScheduleRestApiPut
     */
    extra?: any;
    /**
     *
     * @type {boolean}
     * @memberof ReportScheduleRestApiPut
     */
    forceScreenshot?: boolean;
    /**
     * Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    gracePeriod?: number;
    /**
     * How long to keep the logs around for this report (in days)
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    logRetention?: number;
    /**
     * The report schedule name.
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    name?: string;
    /**
     *
     * @type {Array<number>}
     * @memberof ReportScheduleRestApiPut
     */
    owners?: Array<number>;
    /**
     *
     * @type {Array<ReportRecipient>}
     * @memberof ReportScheduleRestApiPut
     */
    recipients?: Array<ReportRecipient>;
    /**
     *
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    reportFormat?: ReportScheduleRestApiPutReportFormatEnum;
    /**
     * A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    sql?: string | null;
    /**
     * A timezone string that represents the location of the timezone.
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    timezone?: ReportScheduleRestApiPutTimezoneEnum;
    /**
     * The report schedule type
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    type?: ReportScheduleRestApiPutTypeEnum;
    /**
     *
     * @type {ValidatorConfigJSON}
     * @memberof ReportScheduleRestApiPut
     */
    validatorConfigJson?: ValidatorConfigJSON;
    /**
     * Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types: - Not Null - When the return value is Not NULL, Empty, or 0 - Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=
     * @type {string}
     * @memberof ReportScheduleRestApiPut
     */
    validatorType?: ReportScheduleRestApiPutValidatorTypeEnum;
    /**
     * If an alert is staled at a working state, how long until it's state is reseted to error
     * @type {number}
     * @memberof ReportScheduleRestApiPut
     */
    workingTimeout?: number | null;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ReportScheduleRestApiPutReportFormatEnum {
    PNG = "PNG",
    CSV = "CSV",
    TEXT = "TEXT"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ReportScheduleRestApiPutTimezoneEnum {
    AfricaAbidjan = "Africa/Abidjan",
    AfricaAccra = "Africa/Accra",
    AfricaAddisAbaba = "Africa/Addis_Ababa",
    AfricaAlgiers = "Africa/Algiers",
    AfricaAsmara = "Africa/Asmara",
    AfricaAsmera = "Africa/Asmera",
    AfricaBamako = "Africa/Bamako",
    AfricaBangui = "Africa/Bangui",
    AfricaBanjul = "Africa/Banjul",
    AfricaBissau = "Africa/Bissau",
    AfricaBlantyre = "Africa/Blantyre",
    AfricaBrazzaville = "Africa/Brazzaville",
    AfricaBujumbura = "Africa/Bujumbura",
    AfricaCairo = "Africa/Cairo",
    AfricaCasablanca = "Africa/Casablanca",
    AfricaCeuta = "Africa/Ceuta",
    AfricaConakry = "Africa/Conakry",
    AfricaDakar = "Africa/Dakar",
    AfricaDarEsSalaam = "Africa/Dar_es_Salaam",
    AfricaDjibouti = "Africa/Djibouti",
    AfricaDouala = "Africa/Douala",
    AfricaElAaiun = "Africa/El_Aaiun",
    AfricaFreetown = "Africa/Freetown",
    AfricaGaborone = "Africa/Gaborone",
    AfricaHarare = "Africa/Harare",
    AfricaJohannesburg = "Africa/Johannesburg",
    AfricaJuba = "Africa/Juba",
    AfricaKampala = "Africa/Kampala",
    AfricaKhartoum = "Africa/Khartoum",
    AfricaKigali = "Africa/Kigali",
    AfricaKinshasa = "Africa/Kinshasa",
    AfricaLagos = "Africa/Lagos",
    AfricaLibreville = "Africa/Libreville",
    AfricaLome = "Africa/Lome",
    AfricaLuanda = "Africa/Luanda",
    AfricaLubumbashi = "Africa/Lubumbashi",
    AfricaLusaka = "Africa/Lusaka",
    AfricaMalabo = "Africa/Malabo",
    AfricaMaputo = "Africa/Maputo",
    AfricaMaseru = "Africa/Maseru",
    AfricaMbabane = "Africa/Mbabane",
    AfricaMogadishu = "Africa/Mogadishu",
    AfricaMonrovia = "Africa/Monrovia",
    AfricaNairobi = "Africa/Nairobi",
    AfricaNdjamena = "Africa/Ndjamena",
    AfricaNiamey = "Africa/Niamey",
    AfricaNouakchott = "Africa/Nouakchott",
    AfricaOuagadougou = "Africa/Ouagadougou",
    AfricaPortoNovo = "Africa/Porto-Novo",
    AfricaSaoTome = "Africa/Sao_Tome",
    AfricaTimbuktu = "Africa/Timbuktu",
    AfricaTripoli = "Africa/Tripoli",
    AfricaTunis = "Africa/Tunis",
    AfricaWindhoek = "Africa/Windhoek",
    AmericaAdak = "America/Adak",
    AmericaAnchorage = "America/Anchorage",
    AmericaAnguilla = "America/Anguilla",
    AmericaAntigua = "America/Antigua",
    AmericaAraguaina = "America/Araguaina",
    AmericaArgentinaBuenosAires = "America/Argentina/Buenos_Aires",
    AmericaArgentinaCatamarca = "America/Argentina/Catamarca",
    AmericaArgentinaComodRivadavia = "America/Argentina/ComodRivadavia",
    AmericaArgentinaCordoba = "America/Argentina/Cordoba",
    AmericaArgentinaJujuy = "America/Argentina/Jujuy",
    AmericaArgentinaLaRioja = "America/Argentina/La_Rioja",
    AmericaArgentinaMendoza = "America/Argentina/Mendoza",
    AmericaArgentinaRioGallegos = "America/Argentina/Rio_Gallegos",
    AmericaArgentinaSalta = "America/Argentina/Salta",
    AmericaArgentinaSanJuan = "America/Argentina/San_Juan",
    AmericaArgentinaSanLuis = "America/Argentina/San_Luis",
    AmericaArgentinaTucuman = "America/Argentina/Tucuman",
    AmericaArgentinaUshuaia = "America/Argentina/Ushuaia",
    AmericaAruba = "America/Aruba",
    AmericaAsuncion = "America/Asuncion",
    AmericaAtikokan = "America/Atikokan",
    AmericaAtka = "America/Atka",
    AmericaBahia = "America/Bahia",
    AmericaBahiaBanderas = "America/Bahia_Banderas",
    AmericaBarbados = "America/Barbados",
    AmericaBelem = "America/Belem",
    AmericaBelize = "America/Belize",
    AmericaBlancSablon = "America/Blanc-Sablon",
    AmericaBoaVista = "America/Boa_Vista",
    AmericaBogota = "America/Bogota",
    AmericaBoise = "America/Boise",
    AmericaBuenosAires = "America/Buenos_Aires",
    AmericaCambridgeBay = "America/Cambridge_Bay",
    AmericaCampoGrande = "America/Campo_Grande",
    AmericaCancun = "America/Cancun",
    AmericaCaracas = "America/Caracas",
    AmericaCatamarca = "America/Catamarca",
    AmericaCayenne = "America/Cayenne",
    AmericaCayman = "America/Cayman",
    AmericaChicago = "America/Chicago",
    AmericaChihuahua = "America/Chihuahua",
    AmericaCoralHarbour = "America/Coral_Harbour",
    AmericaCordoba = "America/Cordoba",
    AmericaCostaRica = "America/Costa_Rica",
    AmericaCreston = "America/Creston",
    AmericaCuiaba = "America/Cuiaba",
    AmericaCuracao = "America/Curacao",
    AmericaDanmarkshavn = "America/Danmarkshavn",
    AmericaDawson = "America/Dawson",
    AmericaDawsonCreek = "America/Dawson_Creek",
    AmericaDenver = "America/Denver",
    AmericaDetroit = "America/Detroit",
    AmericaDominica = "America/Dominica",
    AmericaEdmonton = "America/Edmonton",
    AmericaEirunepe = "America/Eirunepe",
    AmericaElSalvador = "America/El_Salvador",
    AmericaEnsenada = "America/Ensenada",
    AmericaFortNelson = "America/Fort_Nelson",
    AmericaFortWayne = "America/Fort_Wayne",
    AmericaFortaleza = "America/Fortaleza",
    AmericaGlaceBay = "America/Glace_Bay",
    AmericaGodthab = "America/Godthab",
    AmericaGooseBay = "America/Goose_Bay",
    AmericaGrandTurk = "America/Grand_Turk",
    AmericaGrenada = "America/Grenada",
    AmericaGuadeloupe = "America/Guadeloupe",
    AmericaGuatemala = "America/Guatemala",
    AmericaGuayaquil = "America/Guayaquil",
    AmericaGuyana = "America/Guyana",
    AmericaHalifax = "America/Halifax",
    AmericaHavana = "America/Havana",
    AmericaHermosillo = "America/Hermosillo",
    AmericaIndianaIndianapolis = "America/Indiana/Indianapolis",
    AmericaIndianaKnox = "America/Indiana/Knox",
    AmericaIndianaMarengo = "America/Indiana/Marengo",
    AmericaIndianaPetersburg = "America/Indiana/Petersburg",
    AmericaIndianaTellCity = "America/Indiana/Tell_City",
    AmericaIndianaVevay = "America/Indiana/Vevay",
    AmericaIndianaVincennes = "America/Indiana/Vincennes",
    AmericaIndianaWinamac = "America/Indiana/Winamac",
    AmericaIndianapolis = "America/Indianapolis",
    AmericaInuvik = "America/Inuvik",
    AmericaIqaluit = "America/Iqaluit",
    AmericaJamaica = "America/Jamaica",
    AmericaJujuy = "America/Jujuy",
    AmericaJuneau = "America/Juneau",
    AmericaKentuckyLouisville = "America/Kentucky/Louisville",
    AmericaKentuckyMonticello = "America/Kentucky/Monticello",
    AmericaKnoxIN = "America/Knox_IN",
    AmericaKralendijk = "America/Kralendijk",
    AmericaLaPaz = "America/La_Paz",
    AmericaLima = "America/Lima",
    AmericaLosAngeles = "America/Los_Angeles",
    AmericaLouisville = "America/Louisville",
    AmericaLowerPrinces = "America/Lower_Princes",
    AmericaMaceio = "America/Maceio",
    AmericaManagua = "America/Managua",
    AmericaManaus = "America/Manaus",
    AmericaMarigot = "America/Marigot",
    AmericaMartinique = "America/Martinique",
    AmericaMatamoros = "America/Matamoros",
    AmericaMazatlan = "America/Mazatlan",
    AmericaMendoza = "America/Mendoza",
    AmericaMenominee = "America/Menominee",
    AmericaMerida = "America/Merida",
    AmericaMetlakatla = "America/Metlakatla",
    AmericaMexicoCity = "America/Mexico_City",
    AmericaMiquelon = "America/Miquelon",
    AmericaMoncton = "America/Moncton",
    AmericaMonterrey = "America/Monterrey",
    AmericaMontevideo = "America/Montevideo",
    AmericaMontreal = "America/Montreal",
    AmericaMontserrat = "America/Montserrat",
    AmericaNassau = "America/Nassau",
    AmericaNewYork = "America/New_York",
    AmericaNipigon = "America/Nipigon",
    AmericaNome = "America/Nome",
    AmericaNoronha = "America/Noronha",
    AmericaNorthDakotaBeulah = "America/North_Dakota/Beulah",
    AmericaNorthDakotaCenter = "America/North_Dakota/Center",
    AmericaNorthDakotaNewSalem = "America/North_Dakota/New_Salem",
    AmericaNuuk = "America/Nuuk",
    AmericaOjinaga = "America/Ojinaga",
    AmericaPanama = "America/Panama",
    AmericaPangnirtung = "America/Pangnirtung",
    AmericaParamaribo = "America/Paramaribo",
    AmericaPhoenix = "America/Phoenix",
    AmericaPortAuPrince = "America/Port-au-Prince",
    AmericaPortOfSpain = "America/Port_of_Spain",
    AmericaPortoAcre = "America/Porto_Acre",
    AmericaPortoVelho = "America/Porto_Velho",
    AmericaPuertoRico = "America/Puerto_Rico",
    AmericaPuntaArenas = "America/Punta_Arenas",
    AmericaRainyRiver = "America/Rainy_River",
    AmericaRankinInlet = "America/Rankin_Inlet",
    AmericaRecife = "America/Recife",
    AmericaRegina = "America/Regina",
    AmericaResolute = "America/Resolute",
    AmericaRioBranco = "America/Rio_Branco",
    AmericaRosario = "America/Rosario",
    AmericaSantaIsabel = "America/Santa_Isabel",
    AmericaSantarem = "America/Santarem",
    AmericaSantiago = "America/Santiago",
    AmericaSantoDomingo = "America/Santo_Domingo",
    AmericaSaoPaulo = "America/Sao_Paulo",
    AmericaScoresbysund = "America/Scoresbysund",
    AmericaShiprock = "America/Shiprock",
    AmericaSitka = "America/Sitka",
    AmericaStBarthelemy = "America/St_Barthelemy",
    AmericaStJohns = "America/St_Johns",
    AmericaStKitts = "America/St_Kitts",
    AmericaStLucia = "America/St_Lucia",
    AmericaStThomas = "America/St_Thomas",
    AmericaStVincent = "America/St_Vincent",
    AmericaSwiftCurrent = "America/Swift_Current",
    AmericaTegucigalpa = "America/Tegucigalpa",
    AmericaThule = "America/Thule",
    AmericaThunderBay = "America/Thunder_Bay",
    AmericaTijuana = "America/Tijuana",
    AmericaToronto = "America/Toronto",
    AmericaTortola = "America/Tortola",
    AmericaVancouver = "America/Vancouver",
    AmericaVirgin = "America/Virgin",
    AmericaWhitehorse = "America/Whitehorse",
    AmericaWinnipeg = "America/Winnipeg",
    AmericaYakutat = "America/Yakutat",
    AmericaYellowknife = "America/Yellowknife",
    AntarcticaCasey = "Antarctica/Casey",
    AntarcticaDavis = "Antarctica/Davis",
    AntarcticaDumontDUrville = "Antarctica/DumontDUrville",
    AntarcticaMacquarie = "Antarctica/Macquarie",
    AntarcticaMawson = "Antarctica/Mawson",
    AntarcticaMcMurdo = "Antarctica/McMurdo",
    AntarcticaPalmer = "Antarctica/Palmer",
    AntarcticaRothera = "Antarctica/Rothera",
    AntarcticaSouthPole = "Antarctica/South_Pole",
    AntarcticaSyowa = "Antarctica/Syowa",
    AntarcticaTroll = "Antarctica/Troll",
    AntarcticaVostok = "Antarctica/Vostok",
    ArcticLongyearbyen = "Arctic/Longyearbyen",
    AsiaAden = "Asia/Aden",
    AsiaAlmaty = "Asia/Almaty",
    AsiaAmman = "Asia/Amman",
    AsiaAnadyr = "Asia/Anadyr",
    AsiaAqtau = "Asia/Aqtau",
    AsiaAqtobe = "Asia/Aqtobe",
    AsiaAshgabat = "Asia/Ashgabat",
    AsiaAshkhabad = "Asia/Ashkhabad",
    AsiaAtyrau = "Asia/Atyrau",
    AsiaBaghdad = "Asia/Baghdad",
    AsiaBahrain = "Asia/Bahrain",
    AsiaBaku = "Asia/Baku",
    AsiaBangkok = "Asia/Bangkok",
    AsiaBarnaul = "Asia/Barnaul",
    AsiaBeirut = "Asia/Beirut",
    AsiaBishkek = "Asia/Bishkek",
    AsiaBrunei = "Asia/Brunei",
    AsiaCalcutta = "Asia/Calcutta",
    AsiaChita = "Asia/Chita",
    AsiaChoibalsan = "Asia/Choibalsan",
    AsiaChongqing = "Asia/Chongqing",
    AsiaChungking = "Asia/Chungking",
    AsiaColombo = "Asia/Colombo",
    AsiaDacca = "Asia/Dacca",
    AsiaDamascus = "Asia/Damascus",
    AsiaDhaka = "Asia/Dhaka",
    AsiaDili = "Asia/Dili",
    AsiaDubai = "Asia/Dubai",
    AsiaDushanbe = "Asia/Dushanbe",
    AsiaFamagusta = "Asia/Famagusta",
    AsiaGaza = "Asia/Gaza",
    AsiaHarbin = "Asia/Harbin",
    AsiaHebron = "Asia/Hebron",
    AsiaHoChiMinh = "Asia/Ho_Chi_Minh",
    AsiaHongKong = "Asia/Hong_Kong",
    AsiaHovd = "Asia/Hovd",
    AsiaIrkutsk = "Asia/Irkutsk",
    AsiaIstanbul = "Asia/Istanbul",
    AsiaJakarta = "Asia/Jakarta",
    AsiaJayapura = "Asia/Jayapura",
    AsiaJerusalem = "Asia/Jerusalem",
    AsiaKabul = "Asia/Kabul",
    AsiaKamchatka = "Asia/Kamchatka",
    AsiaKarachi = "Asia/Karachi",
    AsiaKashgar = "Asia/Kashgar",
    AsiaKathmandu = "Asia/Kathmandu",
    AsiaKatmandu = "Asia/Katmandu",
    AsiaKhandyga = "Asia/Khandyga",
    AsiaKolkata = "Asia/Kolkata",
    AsiaKrasnoyarsk = "Asia/Krasnoyarsk",
    AsiaKualaLumpur = "Asia/Kuala_Lumpur",
    AsiaKuching = "Asia/Kuching",
    AsiaKuwait = "Asia/Kuwait",
    AsiaMacao = "Asia/Macao",
    AsiaMacau = "Asia/Macau",
    AsiaMagadan = "Asia/Magadan",
    AsiaMakassar = "Asia/Makassar",
    AsiaManila = "Asia/Manila",
    AsiaMuscat = "Asia/Muscat",
    AsiaNicosia = "Asia/Nicosia",
    AsiaNovokuznetsk = "Asia/Novokuznetsk",
    AsiaNovosibirsk = "Asia/Novosibirsk",
    AsiaOmsk = "Asia/Omsk",
    AsiaOral = "Asia/Oral",
    AsiaPhnomPenh = "Asia/Phnom_Penh",
    AsiaPontianak = "Asia/Pontianak",
    AsiaPyongyang = "Asia/Pyongyang",
    AsiaQatar = "Asia/Qatar",
    AsiaQostanay = "Asia/Qostanay",
    AsiaQyzylorda = "Asia/Qyzylorda",
    AsiaRangoon = "Asia/Rangoon",
    AsiaRiyadh = "Asia/Riyadh",
    AsiaSaigon = "Asia/Saigon",
    AsiaSakhalin = "Asia/Sakhalin",
    AsiaSamarkand = "Asia/Samarkand",
    AsiaSeoul = "Asia/Seoul",
    AsiaShanghai = "Asia/Shanghai",
    AsiaSingapore = "Asia/Singapore",
    AsiaSrednekolymsk = "Asia/Srednekolymsk",
    AsiaTaipei = "Asia/Taipei",
    AsiaTashkent = "Asia/Tashkent",
    AsiaTbilisi = "Asia/Tbilisi",
    AsiaTehran = "Asia/Tehran",
    AsiaTelAviv = "Asia/Tel_Aviv",
    AsiaThimbu = "Asia/Thimbu",
    AsiaThimphu = "Asia/Thimphu",
    AsiaTokyo = "Asia/Tokyo",
    AsiaTomsk = "Asia/Tomsk",
    AsiaUjungPandang = "Asia/Ujung_Pandang",
    AsiaUlaanbaatar = "Asia/Ulaanbaatar",
    AsiaUlanBator = "Asia/Ulan_Bator",
    AsiaUrumqi = "Asia/Urumqi",
    AsiaUstNera = "Asia/Ust-Nera",
    AsiaVientiane = "Asia/Vientiane",
    AsiaVladivostok = "Asia/Vladivostok",
    AsiaYakutsk = "Asia/Yakutsk",
    AsiaYangon = "Asia/Yangon",
    AsiaYekaterinburg = "Asia/Yekaterinburg",
    AsiaYerevan = "Asia/Yerevan",
    AtlanticAzores = "Atlantic/Azores",
    AtlanticBermuda = "Atlantic/Bermuda",
    AtlanticCanary = "Atlantic/Canary",
    AtlanticCapeVerde = "Atlantic/Cape_Verde",
    AtlanticFaeroe = "Atlantic/Faeroe",
    AtlanticFaroe = "Atlantic/Faroe",
    AtlanticJanMayen = "Atlantic/Jan_Mayen",
    AtlanticMadeira = "Atlantic/Madeira",
    AtlanticReykjavik = "Atlantic/Reykjavik",
    AtlanticSouthGeorgia = "Atlantic/South_Georgia",
    AtlanticStHelena = "Atlantic/St_Helena",
    AtlanticStanley = "Atlantic/Stanley",
    AustraliaACT = "Australia/ACT",
    AustraliaAdelaide = "Australia/Adelaide",
    AustraliaBrisbane = "Australia/Brisbane",
    AustraliaBrokenHill = "Australia/Broken_Hill",
    AustraliaCanberra = "Australia/Canberra",
    AustraliaCurrie = "Australia/Currie",
    AustraliaDarwin = "Australia/Darwin",
    AustraliaEucla = "Australia/Eucla",
    AustraliaHobart = "Australia/Hobart",
    AustraliaLHI = "Australia/LHI",
    AustraliaLindeman = "Australia/Lindeman",
    AustraliaLordHowe = "Australia/Lord_Howe",
    AustraliaMelbourne = "Australia/Melbourne",
    AustraliaNSW = "Australia/NSW",
    AustraliaNorth = "Australia/North",
    AustraliaPerth = "Australia/Perth",
    AustraliaQueensland = "Australia/Queensland",
    AustraliaSouth = "Australia/South",
    AustraliaSydney = "Australia/Sydney",
    AustraliaTasmania = "Australia/Tasmania",
    AustraliaVictoria = "Australia/Victoria",
    AustraliaWest = "Australia/West",
    AustraliaYancowinna = "Australia/Yancowinna",
    BrazilAcre = "Brazil/Acre",
    BrazilDeNoronha = "Brazil/DeNoronha",
    BrazilEast = "Brazil/East",
    BrazilWest = "Brazil/West",
    CET = "CET",
    CST6CDT = "CST6CDT",
    CanadaAtlantic = "Canada/Atlantic",
    CanadaCentral = "Canada/Central",
    CanadaEastern = "Canada/Eastern",
    CanadaMountain = "Canada/Mountain",
    CanadaNewfoundland = "Canada/Newfoundland",
    CanadaPacific = "Canada/Pacific",
    CanadaSaskatchewan = "Canada/Saskatchewan",
    CanadaYukon = "Canada/Yukon",
    ChileContinental = "Chile/Continental",
    ChileEasterIsland = "Chile/EasterIsland",
    Cuba = "Cuba",
    EET = "EET",
    EST = "EST",
    EST5EDT = "EST5EDT",
    Egypt = "Egypt",
    Eire = "Eire",
    EtcGMT = "Etc/GMT",
    EtcGMT0 = "Etc/GMT+0",
    EtcGMT1 = "Etc/GMT+1",
    EtcGMT10 = "Etc/GMT+10",
    EtcGMT11 = "Etc/GMT+11",
    EtcGMT12 = "Etc/GMT+12",
    EtcGMT2 = "Etc/GMT+2",
    EtcGMT3 = "Etc/GMT+3",
    EtcGMT4 = "Etc/GMT+4",
    EtcGMT5 = "Etc/GMT+5",
    EtcGMT6 = "Etc/GMT+6",
    EtcGMT7 = "Etc/GMT+7",
    EtcGMT8 = "Etc/GMT+8",
    EtcGMT9 = "Etc/GMT+9",
    EtcGMT0_404 = "Etc/GMT-0",
    EtcGMT1_405 = "Etc/GMT-1",
    EtcGMT10_406 = "Etc/GMT-10",
    EtcGMT11_407 = "Etc/GMT-11",
    EtcGMT12_408 = "Etc/GMT-12",
    EtcGMT13 = "Etc/GMT-13",
    EtcGMT14 = "Etc/GMT-14",
    EtcGMT2_411 = "Etc/GMT-2",
    EtcGMT3_412 = "Etc/GMT-3",
    EtcGMT4_413 = "Etc/GMT-4",
    EtcGMT5_414 = "Etc/GMT-5",
    EtcGMT6_415 = "Etc/GMT-6",
    EtcGMT7_416 = "Etc/GMT-7",
    EtcGMT8_417 = "Etc/GMT-8",
    EtcGMT9_418 = "Etc/GMT-9",
    EtcGMT0_419 = "Etc/GMT0",
    EtcGreenwich = "Etc/Greenwich",
    EtcUCT = "Etc/UCT",
    EtcUTC = "Etc/UTC",
    EtcUniversal = "Etc/Universal",
    EtcZulu = "Etc/Zulu",
    EuropeAmsterdam = "Europe/Amsterdam",
    EuropeAndorra = "Europe/Andorra",
    EuropeAstrakhan = "Europe/Astrakhan",
    EuropeAthens = "Europe/Athens",
    EuropeBelfast = "Europe/Belfast",
    EuropeBelgrade = "Europe/Belgrade",
    EuropeBerlin = "Europe/Berlin",
    EuropeBratislava = "Europe/Bratislava",
    EuropeBrussels = "Europe/Brussels",
    EuropeBucharest = "Europe/Bucharest",
    EuropeBudapest = "Europe/Budapest",
    EuropeBusingen = "Europe/Busingen",
    EuropeChisinau = "Europe/Chisinau",
    EuropeCopenhagen = "Europe/Copenhagen",
    EuropeDublin = "Europe/Dublin",
    EuropeGibraltar = "Europe/Gibraltar",
    EuropeGuernsey = "Europe/Guernsey",
    EuropeHelsinki = "Europe/Helsinki",
    EuropeIsleOfMan = "Europe/Isle_of_Man",
    EuropeIstanbul = "Europe/Istanbul",
    EuropeJersey = "Europe/Jersey",
    EuropeKaliningrad = "Europe/Kaliningrad",
    EuropeKiev = "Europe/Kiev",
    EuropeKirov = "Europe/Kirov",
    EuropeLisbon = "Europe/Lisbon",
    EuropeLjubljana = "Europe/Ljubljana",
    EuropeLondon = "Europe/London",
    EuropeLuxembourg = "Europe/Luxembourg",
    EuropeMadrid = "Europe/Madrid",
    EuropeMalta = "Europe/Malta",
    EuropeMariehamn = "Europe/Mariehamn",
    EuropeMinsk = "Europe/Minsk",
    EuropeMonaco = "Europe/Monaco",
    EuropeMoscow = "Europe/Moscow",
    EuropeNicosia = "Europe/Nicosia",
    EuropeOslo = "Europe/Oslo",
    EuropeParis = "Europe/Paris",
    EuropePodgorica = "Europe/Podgorica",
    EuropePrague = "Europe/Prague",
    EuropeRiga = "Europe/Riga",
    EuropeRome = "Europe/Rome",
    EuropeSamara = "Europe/Samara",
    EuropeSanMarino = "Europe/San_Marino",
    EuropeSarajevo = "Europe/Sarajevo",
    EuropeSaratov = "Europe/Saratov",
    EuropeSimferopol = "Europe/Simferopol",
    EuropeSkopje = "Europe/Skopje",
    EuropeSofia = "Europe/Sofia",
    EuropeStockholm = "Europe/Stockholm",
    EuropeTallinn = "Europe/Tallinn",
    EuropeTirane = "Europe/Tirane",
    EuropeTiraspol = "Europe/Tiraspol",
    EuropeUlyanovsk = "Europe/Ulyanovsk",
    EuropeUzhgorod = "Europe/Uzhgorod",
    EuropeVaduz = "Europe/Vaduz",
    EuropeVatican = "Europe/Vatican",
    EuropeVienna = "Europe/Vienna",
    EuropeVilnius = "Europe/Vilnius",
    EuropeVolgograd = "Europe/Volgograd",
    EuropeWarsaw = "Europe/Warsaw",
    EuropeZagreb = "Europe/Zagreb",
    EuropeZaporozhye = "Europe/Zaporozhye",
    EuropeZurich = "Europe/Zurich",
    GB = "GB",
    GBEire = "GB-Eire",
    GMT = "GMT",
    GMT0 = "GMT+0",
    GMT0_492 = "GMT-0",
    GMT0_493 = "GMT0",
    Greenwich = "Greenwich",
    HST = "HST",
    Hongkong = "Hongkong",
    Iceland = "Iceland",
    IndianAntananarivo = "Indian/Antananarivo",
    IndianChagos = "Indian/Chagos",
    IndianChristmas = "Indian/Christmas",
    IndianCocos = "Indian/Cocos",
    IndianComoro = "Indian/Comoro",
    IndianKerguelen = "Indian/Kerguelen",
    IndianMahe = "Indian/Mahe",
    IndianMaldives = "Indian/Maldives",
    IndianMauritius = "Indian/Mauritius",
    IndianMayotte = "Indian/Mayotte",
    IndianReunion = "Indian/Reunion",
    Iran = "Iran",
    Israel = "Israel",
    Jamaica = "Jamaica",
    Japan = "Japan",
    Kwajalein = "Kwajalein",
    Libya = "Libya",
    MET = "MET",
    MST = "MST",
    MST7MDT = "MST7MDT",
    MexicoBajaNorte = "Mexico/BajaNorte",
    MexicoBajaSur = "Mexico/BajaSur",
    MexicoGeneral = "Mexico/General",
    NZ = "NZ",
    NZCHAT = "NZ-CHAT",
    Navajo = "Navajo",
    PRC = "PRC",
    PST8PDT = "PST8PDT",
    PacificApia = "Pacific/Apia",
    PacificAuckland = "Pacific/Auckland",
    PacificBougainville = "Pacific/Bougainville",
    PacificChatham = "Pacific/Chatham",
    PacificChuuk = "Pacific/Chuuk",
    PacificEaster = "Pacific/Easter",
    PacificEfate = "Pacific/Efate",
    PacificEnderbury = "Pacific/Enderbury",
    PacificFakaofo = "Pacific/Fakaofo",
    PacificFiji = "Pacific/Fiji",
    PacificFunafuti = "Pacific/Funafuti",
    PacificGalapagos = "Pacific/Galapagos",
    PacificGambier = "Pacific/Gambier",
    PacificGuadalcanal = "Pacific/Guadalcanal",
    PacificGuam = "Pacific/Guam",
    PacificHonolulu = "Pacific/Honolulu",
    PacificJohnston = "Pacific/Johnston",
    PacificKanton = "Pacific/Kanton",
    PacificKiritimati = "Pacific/Kiritimati",
    PacificKosrae = "Pacific/Kosrae",
    PacificKwajalein = "Pacific/Kwajalein",
    PacificMajuro = "Pacific/Majuro",
    PacificMarquesas = "Pacific/Marquesas",
    PacificMidway = "Pacific/Midway",
    PacificNauru = "Pacific/Nauru",
    PacificNiue = "Pacific/Niue",
    PacificNorfolk = "Pacific/Norfolk",
    PacificNoumea = "Pacific/Noumea",
    PacificPagoPago = "Pacific/Pago_Pago",
    PacificPalau = "Pacific/Palau",
    PacificPitcairn = "Pacific/Pitcairn",
    PacificPohnpei = "Pacific/Pohnpei",
    PacificPonape = "Pacific/Ponape",
    PacificPortMoresby = "Pacific/Port_Moresby",
    PacificRarotonga = "Pacific/Rarotonga",
    PacificSaipan = "Pacific/Saipan",
    PacificSamoa = "Pacific/Samoa",
    PacificTahiti = "Pacific/Tahiti",
    PacificTarawa = "Pacific/Tarawa",
    PacificTongatapu = "Pacific/Tongatapu",
    PacificTruk = "Pacific/Truk",
    PacificWake = "Pacific/Wake",
    PacificWallis = "Pacific/Wallis",
    PacificYap = "Pacific/Yap",
    Poland = "Poland",
    Portugal = "Portugal",
    ROC = "ROC",
    ROK = "ROK",
    Singapore = "Singapore",
    Turkey = "Turkey",
    UCT = "UCT",
    USAlaska = "US/Alaska",
    USAleutian = "US/Aleutian",
    USArizona = "US/Arizona",
    USCentral = "US/Central",
    USEastIndiana = "US/East-Indiana",
    USEastern = "US/Eastern",
    USHawaii = "US/Hawaii",
    USIndianaStarke = "US/Indiana-Starke",
    USMichigan = "US/Michigan",
    USMountain = "US/Mountain",
    USPacific = "US/Pacific",
    USSamoa = "US/Samoa",
    UTC = "UTC",
    Universal = "Universal",
    WSU = "W-SU",
    WET = "WET",
    Zulu = "Zulu"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ReportScheduleRestApiPutTypeEnum {
    Alert = "Alert",
    Report = "Report"
}
/**
    * @export
    * @enum {string}
    */
export declare enum ReportScheduleRestApiPutValidatorTypeEnum {
    NotNull = "not null",
    Operator = "operator"
}
