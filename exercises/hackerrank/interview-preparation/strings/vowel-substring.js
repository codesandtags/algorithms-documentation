// https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples#:~:text=The%20Sliding%20window%20is%20a,complexity%20to%20O(n).

function countVowels(s) {
  return (s.match(/[aeiou]/g) || []).length;
}

function countSpecialVowel(s) {
  return (s.match(/[_]/g) || []).length;
}

function findSubstring(s, k) {
  let totalVowels = countVowels(s);
  let maxVowel = 0;
  let maxSubstring = "";

  if (totalVowels === 0 || k > s.length) {
    return "Not found!";
  }

  const x = s.replace(/[aeiou]/g, "_");

  for (let i = 0; i <= s.length - k; i++) {
    const substring = x.substr(i, k);
    const vowels = countSpecialVowel(substring);
    const indexNextVowel = x.indexOf("_", i);

    //console.log(`${substring} : ${vowels} : ${indexNextVowel}`);

    if (vowels > maxVowel) {
      maxVowel = vowels;
      maxSubstring = s.substr(i, k);
    }

    if (maxVowel === k) {
      break;
    }

    if (indexNextVowel > 0) {
      i += indexNextVowel + 1;
    }
  }

  return maxSubstring;
}

//findSubstring('caberqiitefg', 5); // erqii
//findSubstring('aeiouia', 3); // aei
//findSubstring('azerdii', 5); // erdii
//findSubstring('qwdftr', 2); // Not Found!

var s =
  "eazuodeasjhevmfcheleeldmgomahlxnhuuuaqfcxgzkdwkwtbmkanlcccvczyaovocymcmxmzqnwmyghfefdlxyhzqhzevckzdhuuilrcemkkwenzgushpuncfpgpfwncnhevwpygekelwiqofrkladrfkmamzrbiswymroojjzxzygfkvydyxmkibnxzddculxabokiqvdfvbkxxgblcthakypmzhtkxtqnvafsgcxatezsqjkrefihwymurodbbwjtwqxwtbqepqtwwtdrtecvhphdcnhqpjakimxbtuymqdnltmhslyklzvhgroeeqrvnsbwkrvpvvbywjlqtecuaonkrpntacwyzxvahcmsorygalsgccnkgokkstjxwxsqwnyuiunelcxbvarodcztuwwukvgnwvvqfgvfcfybworgpiptizoofpimgrrunduykvvfueknonsxztptlbzlrfcocerpjgemrxmsaxyllqhdkynlsnqagewykfokjqwvsswqwqykaattqghtzuwksdnyvmoqokulxkcabbygvzeqahwxrmqkexmgghipmpszmajlamlsywqrcvhpzhxabkuzzhnbjbfiglfflbfcfnjhyrsztscolzlhwdvxqubafbxdkxhkoiabhgvzphurlwrnshkmzcfdhhvrgkuppdclqsnyceamkxkyctbmtwnslzxljbimnotlmhxojvgjacdilitttdveqvgpwnttutkiksnvcuesrblpacmuapltsohnyycqjnxidkrwbndubambieqovrtpyvqrrgokragwuteupxxixycvwvmjxibhhitmdkvqafnzdzpvyydcoroomndmrseslvhkbppcqkmhxlgsjvqucvfqtwjrtheisvboaxtgtrjoamphlhqtsfdaxdyslvebypukeopxuvtkqydamcpdjydrwpfqqxekkmfgdppcqpwiwndjqkxllqplbqxgecsbnvlkeedfqcjpledqymbccmzyvwqbkoamvllqkpnaygmwvkldngysmqrokswpfsetbptcvwzcqrfxnlqftcbfwapawpeerbqclxcbjbwaxvzaxjdawsqevbprcnrwylnrboejvixzrjtkddceliladwymlwzwzsjncatjcakodewxcebkvkrtntalhruzwsdllrqhaojqpywgrkwrwdkngmnaubhrvcmffielfqdcmwpgclpnwzpjinmitgowkzqvcenhgagczutlxecdgrxinsqzvmorphjgyhjlqxtytmphqujpcoaorntyoqgdqflqbrbfxjhtlkgrxjnxgsqhxxqfyuccuyrmafaqbviyykkfwznzmxjioyvkuxynieubcosixsyniikzszztoooaekcbbwyworydpicfuqifgtnvdadjepwvwcnubvkpuzsasvmyannyvhqtpqaafqejhfurziwdnrxpnugibgfktfohdfzygzchdjzlflojderzqwfdufymmbqgeaerzeucwzlytyvjzkqytxkiyxhtjduiqgkcofhiarkhclyfyekommbejjyrwgtserxwwrvlkvajhmvdypoyffwthmjujnxlgfdhiwbktaqmeiuxbtfmjeldjdgbwhfvcvrginuezlrqjwqbuebbyqiuwtlrzurkzqqhovsprhdjxwkktgnswwnvgtmmiqpdgmwqhgdnamhuhoussicoysbxpdsoulndbtpnxurvawdkjpebnrawzmmimloencfssoekdptahthxdqvqaizxbzypcwwtoujereghkkainyegvjakhfoqhiilfyolkvohcrpfsgtrpqtunchvhevvrcjuzsbwdkqynrtqxyueqdxzzcorkuqmdefwzjbtvlxsdblmcgpeqtentgmfbhfkptodurrtguuewokqsgpjqtmrskuuhokcdopccmyqjroygkczpnkljanvrgqygvpezfxovpeepqpuenrxrbfxngefivqmwqzuiruvchlmkfwpzgyzrpxaqkuhcdtisnifqcaumcwlvfmbtisnocqgkcpjhfnedirtxwgmzggbjanvclpvkoivkofrtczndpovcizfbiztugjsjnddxnzkpqjsdmasgjjuwvzhzkznkqeexvxxcpcwnowqitqljymspnzygaznuvbjaqsbnxuxhmkmimzkmpnxacttacpeshzerguwjesjglcivushpsqievtvhcbbqngdytzwdlopojspavyygnsuvzqecmlgmqrqbowzkiielycasljhtgfjdgbrantdeiilygeydfvyxhmetphvalanwmoetvtxmvjqvxvwbhrhxjkujcreeaadpqjlhnuvffivwfbfpgdssgundgimnkltjvykzmdppjbxutrclnwecqvvwrycaffmgjzpyqilfcicbowtxamjoejdmmjnkyujlfgaiddwkssdxcmceipjkbuipwizhbtrqliipwnzuythdfdovecbwjrsqniixgvvhrxjsgwsdsakuekuknflevljwfvvtryorkfqibbbnopwwacjnmoeypothhxtoyrtfvhdnrdhncqsrvjbjedlcltvyvpmmpngsguqrtyjgkdyczhqqnssfjiwhuwhjronaloflbujfoarcrtedixjnldjybekhigjzrngixozwvjonuysbondxjwwinfvbnlfnbklszvhpphsyootizehnubzmpyhowwrdsyzvlrhfcogpyktsvtznggxqimlztabmttmyzchgfutauerkpvxbduokdbtuezeudidwsfvbzmouukvpbolletxjshxrhogyzjsptsuiqtlytxznxuxlcfuklxvzysamfejbghjnjtaficsazylyhfzbxxlqyzzskoddjwemnhijvlhbpqfioaaqjwjzlfjyscnepnojaaxyiwnzfkewlmnvbdapylqqniqouytoweqyguusmgbkkcimbiiuztduiokjlibqvlwquesimiqwaievmptuqpvjizdyrqdrcxzbwmxoegnsekfahzigrjwpxolaokkwylbfygychjpgvdusmfceibiwtortqyaclswyvvoztxxesucalklbphmpxyqnclvjkkhbwspukdhpcghkhnpcjqclqfetqhoxzadfnjyjnwjhozxpmpfaguzskgaszbshgevyqgxieuyzylgznroypkwdzbjekmxpxilvoesnjrnflwxoddynocomylpbqwptmaxuociswamnbhphypakpwgnmouiabfllywlesenhlrdwtkdkoozmavkxayoxwuzzoqtsmvkekhtdohkqlmepgyrwimnaisjipmfvplqwtpbpsbynapwwexwbppdbzlwmxxkwyqqbqpkeqqirvynejkowtpvadkioznxltmymjnizdulwhimthancilqihkqjtirusuikxowaduzjlgwknizylcstnltjbxdamfvdadwhfgevxdbcnsvqfonknjtdlitigrmhlognhiturolpruwgkjmsnfkihvcioblyllmlbolcyxlfvbolblyptikgziuiunahebqejwqkhhfyffggmppbjqgnkxpnjlurmzgwricxsesdvdvercllsyzlkgmmsybrozpthvkhrshhagbohohejwbhtqavizyfmvrbkbfgbutysgkrfigqweroehdsozuzkwvlaljbxbvxuriwbkgvxxamyqoiryxaajvexbfmnridhoovrmtunmogtghagefuoypugedurmfmbmzlloylafrskdicrdnkebjtufdcsbqmktvohaaupskecvkagyizvfhslfeuyvhfwzpgrsdljatqplexqsqvdjtqizzaaanwkjjewnzuieqapqmqmjvuznufzukithigbljxsfhbmatwaimbumomyreogqjmpszpfkujbnaxgecxzfemevsyqckxzmbmgxlmnldislishbnlfpoafwrvlsygkznyjtgiohbzclbhjmfwolwgowregoyzfhlffdoxqbyvpjkhcxulpsdsjkbppraezupwskqvlakybjuunadrwpxknxfiunqrgoplmrwwdptqpvtgielwdkebslrmnyqhawnuidcrbaaeakzezsedcvvssstlmhtmwnvkxvelwhalsgvbgoujjppngyzohzpufyokjrciqrvzxumrfudgkoiixqlcdwdmnvaqqwalgbofamyakekmwvlkjvijiefzlanwrojtdtznasndgksffbaemdxpborzxkmpzragjnsnfaccqyocoaxolrcqpbvxphouaazmqcvyqcodoaiqfwpshfhrctlxiqrxyacndcexjidmwtizaujnsjrzyahhbppcgfcaemtimbflzkbsrmzmeyzyujgabknwhlxwxvvlmbtkbdvrgihdyhdryzkluzkrxzonwdsbgeaobfvcnkjsdjhncqicegswkekqpqyzyhwumynppmbylyumgkmfvfxmrkhqudcqejpkiktocgdagkcygyeasxyvfwtpmhthkaiivexjgfoehpgyifcngschqkhzlyfhylovkrxzedgwtibyjdcephtzmapqwolzadjrqflitvlzokrwjiuoplrcstvrnatrxkxrjissbiwgqjwcjrtzpcvagwnraizozkxgfxgovwslywlsoplbqqezjejuzjhuexqaptunotnsnftaeipvytikerjjisnzxugjxshrkypulkqlvepsoiaqnlivxctsjajirqhvlrhiwastywlyksorsqwcrwooexcnfmkwthckzoyjvvhmebwhljeokjyreggxvfappxkgnzfmzhpysahxefrzdotpkitvjxkbceujqxdovohwgmwwrqtkxlshntnqosllwrikgqotyxyhodzoemgkcyeozfxvjtgdavgfeunilbqgnvchoqpwaybgxkqlatzughmqnysrlwsgpnegedbkrsqnbjurlqusutmerlscuymngpcdgfokuycuxvdlzoyeynawgbaxlgsfptovspqdwmvyqwkbekhkayrolthmfplonfyrnnczjjbrxzqozvkcemtenjspyhuzchzyafslotswmqbgjtlvpomfodorscexhnehtmafexjdlbtsimxobdbuueeiuzryuysjgzshtwzgtclluvlernzqohefzdxgjmajgsutfkigvvsvuxafxwkqthullkmekqnbefgxkxrscsmqdorxjxahjcrsmevnxmoniojrrkkqdmbhhjvyjwuulomgcgblkmliqfrwvuzkvtoroqatnbbvlhtmylwzsazldavyultepmiodtfjdclitocwfjbzngyoqccgvbrwtvjaqpniibrqkgiqusbflcuzhbwwlvgkkkvebvgfscfehlzuvlgztlqrmdzmevygojxkqloadkfawosmmuohmnddkpyyiivdlouarzmfsdsmrtkycqvbkxjbnoksavxiipqsesqmucpbxchnlwgicmcxaixqmbvxurliazclrcxedotnyewuymjcutltafitfaqkkciowludjsvdasjhipzapsovqekmdzcdoxkaidogzdckddampxaqlexxurmahmxvylojndfakngqhkmumfwhzrtziskcovhppdtapdayxyzxatxdkcofgevjpdgzowpmvvxbwhyeuashtszjvvlqapthhdsvahecrbdyddzutoqtfdathexrxobldjkcwootsnqctvthlhvonkruytoxeymlntwtyulwudqocbbgzbnltblwpphywoycnrtztnogznddzcubrfnqjmekforwncuohkfcgzwpmdzzyaeajpthkcdysncwzovuncqkblrjwoxiluqmwlsbcyleiyvbnerulivmmerrdpsgizocjkpgwqoqmlofsakgqvdnnghnzkuyxrauqbmlliakxchaeebygdifouexpmmdsmnndzftfppgnxljfhqimgvdvlydxvfvqzizfycequwvdgpputeaerqpxxdxrpllxveuzurqszgbxmbweimnyhvxuqqbvnkfkgulptqzcchixrxopjnpiqiqkmhmpmjdlwvrfibkhcypnosuffgbcoxzkmhllwuhilgkmopsemkdfotuzyqxwieyltlakhlhmwhmllbdhqnwxtaxqusdnyavnrprpiyjyolqfarwomfvapdgieafbhvkqpnzagpmtcsvhltkyzieeeltbjejtkfttaiapxkmdacnaqiftqvxnpjaapnzusbwrcjnpbiiomoqpcedsvjpkdklrppgsmaewpanqfdamhnlqyytiuoryurippjchtazsnhidwoseldndfjprgfgrzdffliwrowrwhzqdawnlzvwhpdtjulfsllifmeeftxjbmfacjjyjapmzwklcgmdfwdmlhjkquxyjybkeqrslyhavmhntuqhoekkosoigcqaxsvdiqkbqrwloubdvtjhxwgmzrhkyumvtdwuzhxfqivvajcavmawoyzezkwkfkmatjvebvluhtymzzwwbrisxeujfdznhehmcmqaghjllulnufqabafrxgkmigyxibnhzcbvrknhvhobmpfnogiagsfjnwdvqdnbuqniyyfomgpslfzdqyyyemlmohvwgthxzjxtfzefqpwqxouamujhmbrahvtytwbsybhkawmmorkcjznrvmfqfboudpppwoeinpxctygvuyfdmtjqrrmxrncurirlzbfycbexcpqyqltzwsodiqlezzxszwojusrcclzcwovtebjwxaoskndgdrsbrfoykuqmztswutosuksletoxioiyxtcxaugyntynpjjnwukumiwresiapivbstfvpstgelfevhjnsqezlagotceiylfzvdhminrxhhmfcardhebjnxaajdknrismpsxavqsxmrisighyfybjtlwwreaamkeoqwyrnlhsbuzwlylefotkjkrruhkwybvauooydacyufeiimizgnuupiarsylfrfyvvlaqpihcltjgguxauimcsgtsfmgnipgxezeldwudjxygfimfvrbxnxeryqnhukxaciixcnvnwwxmualicsevnsxxebyhpuodvsvpxacrdfsgxgrxmejcsvuarhmldtylmgamakeikglwchrmjciwakfyjoqlfcpqxbbcdkxsrtnpkjdxtqlcverixaohxazlqvghbiihgdspyflhlswjgholgeuvlxcgmvmmwxgtjfwqonminbpxiuglcvpeppxbgymexxbbydsdefztyahddykkfpxshrlivewbnurwqxfvzowrxcyfwzdvelhelmudstelozdixwlcgftuxwhjabrtwzwpqwzaoahbwfwcwslmszwgvzpxjncqllufitfckvevwiypucjwecfiwikfjlzyfapcioutcqeqngbtfjllrsqpdnyrmbrkzpeizoqbfvmbpeuqtjjzohxvyxlsxvsjwjailfvhpcttmtxguaxwdwrszaeytjbdmmjtypaeqdsbrbywtjnnjcxtnmqxgtumjancfvcgvhxktvrbjtgfsdrogotajcvbmjdhoyjqzobburovewiiailrxluyueuzsiioxsmyctcyytlhvmfzeescbrundcpyfkogepkknnidywxedggsfznbeuvokrgibzhpbkprgaadprgskwufbruiephwbjaafmsowyjszchjrhdzulftouzkwtdjgynduxzcenqwibbpknhxjqslfjbolotrgrnfiyxnthfihckvnesbaeyvvddgdivkvgjqooldenbpyavmbrqkkymhaydikslvmeehugmcswyyevfpsukwfdncnrtxrbzdfiidadblnwphnwscaetsywqlgbalejzuahtujbxtzripvegzyvzngphihmhbmykfisyoywhzxwxspfadbjwhzcrjlyycsvqeqmwyvsbfdsoogrfifrqyxwgulzzafvgfxkpdecnlvframonzcegkpsxllkfvsafujcizovsknforcholnczorsoefehigwtzigdwafjwdpyfclbiknqrzkzkardhqkkuqjqxgxcehcnrazxwwwlnptbnxitpepymglmhubrcwcwtzpkemqyrvvtrrvudkbuvldqetvxxutfvqlphchcslxgrbybmxwtptkbckookysuamgqbycjeecsoehgdbhsldafovljmnibjjkzeqlufmsbijynhvptqejqranhozbmbxsvbeuesivvtufhrkmugdtktegwnihhwuwbhyovbakdckhprcviqzziyqwwvpbjsdcpwacxiigompynxfepffwfjulebodkfhahsfxjdqnwzhblomliznpjriuhydipsokkecbaoinsnncesgldeiqqglgdyexuynypzzqmvshgngdxohnakopdwahojtexjcnitiglljvqyougbddbiqfrwlqnsmtavvlluyyjgxygehvzvblghoqytmpfdonpzhzifsntxtlcumyjstmlzofflosmwvzksbwrycjcknvousytfwntxaxkgsgebctockigskqzlahzatdjfnigrgovvsciwmfxozhvsvrgqxmvlkstqnvzbkihpudurvmiulbtushvhrzmuznigzpxlpgbiudfrfphothrqnmvglyzrqklowbgntscycmwolxwkporouzmgsdzukjqcjzqbemlusouftvngqumeikhhsbmmsqhqgvskvihrwauftmqoaouwcfruexrsqvvanqycpenzxrdgpfnhtxfacjezddgiarnstbkxwidukfmgtwxnazkxgdsynpnuwcxecjeelpenzxnunnqssogmrlwfukwckojbvviwvpitspeisbrnhpjzhdwaoydasiebtoozsbpwarkaazclowpmthbnauwytbjxqhleciasymkuixtkvjjqetkjnnubnzeewujghywmmzuehbqrcyswmbumphxtmnxsyxxceztbfhqcvkvavzmyzwspfqtslandxtmbaietxklrifcvactwwutsiblftejcrncsfuxgoypdtkihjumzstqfotabehtwohfpalqprjjzgrnxbnyxlabmnswkolldluxfdhklliysftuvggbnxkujhcqmmfitgstsoyycccocctjjiancdnimjkpinafdopoplfulytdltzmzmnrkcxvkyqchxswbescsubcgyaqmajfrvzipqnmbfigtgkzjvkqztfsrvbwriwuvrqgelgussaoybbdnepduffmhlwloflzovdeieerxfiyxfdpfynbpgtcriaxlmkvcxjqfeqxqxcfjkgnbifseryjlpifailaxdaetzmpfylfwzqjockfmwcjztzunhtziczfbfibudgbzusuhoeyzjosuqvabzjikffqkjhzhcrfqndtsnfnlsdnfsqfixnjxpizsgilxjkfxbbuflyuvnxhssqadpbkqysghitxoqmmpvzbzfgviewepfuwjcgzngzmkbmhbptrtopvimvgayjjdprbihhoqbikuevuwigffzhvvsjuulewxktvgheyssuatmanzcmadzzflvhlklvhxffjvntfamqiphvasrxeqvlhycgiejavvvnlokxsrhugxjjvdknthtvuyeqekurnqqtfqqhzquogenylmxlesualalptmggzhmafaklwentmsnqmgouilcskopsriaevakfhsjtrisfsjmuhrzebkfkfthwwpxlxbfrbsviaygpdmvvxcaxefuklsxvbxpurdrkylqqphoxgvirsotodqmgtyuotpoqdfqqzhhsxbxbdrdsatveigrobahxcpgrmpjlybzhwmkvdffjmzkhnvjkltvqztsdcxbqposzvdihkinjcebfanbqekbixufxpksoxokautijmfmqyplnrzkldzwkgnbbilwlpjhftaqaodnrwdgtvuixoyxgsbbkugwslbapgxrmvxxsaywnqgejtgemuyjdrhvdvpaqxixudrrtobhbkdcrbjjtgyxfhdzsquwcopslunrhdzizqgeznwnoajjjvpayuuaaehvvpitztgshxqnxdwelwijemf";
var k = 621;
console.time("solution");
console.log(findSubstring(s, k));
console.timeEnd("solution");
