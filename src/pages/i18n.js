// i18n.js
import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          templeName: "Bhanu Jayasekara",
          templeNametwo: "Hey, I’m Bhanu Jayasekara.",
          homeDescription: "The liberated ones are virtuous and practice the Dhamma diligently. They are freed from suffering by the realization of the Noble Truths. Māra never finds the path by which they are liberated.",
          homedes:"(Dhammapada, Puppha Vagga)",
          homeAbout1: "About Me",
          descriptionOne:"lorem",
          viewAll: "View All",
          homeAbout2: "MOST VEN. WALGAMA DAMMINDA MAHATHERO",
          homeAbout22: "Chief Incumbent (Viharadhipati) of the Weediyagoda Maha Viharaya",
          descriptionTwo:"",
          events:"Events",
          year:"around the year",
          esalaEvent:"Esala Maha Perahera",
          esalaEventdescription:"The Esala Maha Perahera is a vibrant Buddhist festival in Sri Lanka, featuring majestic processions, traditional dances, and adorned elephants.",
          homeGallery:"About Me",
          aboutfour: "Weediyagoda Natha Devalaya",
          descriptionfour: "The historical temple of the Sinhalese dynasty built in the village of Weediyagoda, where Natha Devidun, who is known as a divine king who will become a Buddha, is very popular in this area. As a young king, Prince Raigambandara was in Raigam Korala to escape from his enemies. Legend has it that he renovated the Maha Vihara of Weediyagoda and built this temple. According to the inscriptions found in Velvilla area, it is said that this Nath temple existed even during the reign of King Sena III. Thus, there are many legends about the Nath temple. However, the stone foundation of the temple, the doors made of black stone, the floor covered with dung clay, the door built with wooden hinges, and large wooden beams can still be seen in the way the king's children built it.",
          descriptionthree: "In order to pay homage to Lord Natha, who wishes to become Buddha, the Weediyagoda Esala Perahara is held with great devotion and this Perahara festival is the only historical Perahara held in Raigam Korala. All the Peraharas that are held today are considered to be the Peraharas that started after this one. The Perahara festival is conducted under the initiative of the Viharadhipati Thero, with the initiative of the Viharastha Task Force Society and the Donor Council. The Esala Perahara series held in this way consists of three Kumbal Perahara Festivals, three Pavada Perahara Festivals, three Street Perahara Festivals, a Randoli Maha Perahara Festival, a Dewele Perahara Festival, a Water Cutting Perahara Festival and a Devolmadu Pujotsava.",
          aboutthree: "Esala perehara",

          youtube:"Meet ",
          live:"Bhanu Jayasekara",

         
          youtubeDescription: "This is a small description about the YouTube video.",
        
          

          esalaEvent10:"Devol Madhu Pojotsavaya",
        esalaEventDes10:"Seven days after the end of the Perahara series at Natha Temple in Weediyagoda, a devolmadu festival is held in a manner peculiar to Raigamkoralaya. The purpose of worshiping all the deities including Goddess Pattini, led by Lord Natha, the good luck of all those who participated in the Perahara festival, and obtaining God's blessings for agricultural fertility are among the main objectives of holding the Weediyagoda Devolmadu festival.",
        esalaEvent8:"Ritual of making offerings",
        esalaEventDes9:"According to the ancient custom, on the morning or evening of the first Paavada Perahara day, offerings are made to the Natha temple with auspicious auspiciousness. A few coins washed in the juice are placed on betel leaves and raw turmeric leaves along with a piece of turmeric and 'offering' is done.",
        esalaEvent8:"Diyakapana Perahara",
        esalaEventDes8:"One commentator is of the opinion that the ritual of water cutting was added to the Perahara culture after King Gajaba broke the water and went to India and the Sri Lankan prisoners and the relic of Patra came to this country. It is customary to keep it safe. Kapu mahatun divides the river water with a rankaduwa in the middle of the river and collects some water. It is customary to keep one of the water until the next year's Perahara festival.",
        esalaEvent7:"Randoli Maha Perahara Festival",
        esalaEventDes7:"On the 7th day of Weediyagoda Natha Dewala Esala Perahara Festival, the temple procession is held for seven days and on the eighth day Randoli Perahara or Ekwele Perahara visits the streets. The main Perahara of the Perahara series is the Randoli Perahara. It appears that this Perahara has been used as the Randoli Perahara since the past because of the 'Randola' or the randoli that carries the ornaments around in the Perahara.",
        esalaEventDes77:"Weediyagoda Natha Temple Esala Perahara is a centuries-old historical procession. The Esala Perahara of Weediyagoda is held with great devotion to worship Lord Natha who wishes to become Buddha.",
        esalaEvent6:"Weedhi perahara",
        esalaEventDes6:"Weedhi Perahara is called street perahara, which is located in the middle of Satara Street, which is located in the middle of Satara Goda. Street Perahara is two days. On the first day, once and on the second day, street perahara visits the streets of Satara Street.",
        esalaEvent5:"Pawada Perahara",
        esalaEventDes5:"With umbrellas, flags, sesat and guard weapons, the devabharan buried in Natha Devala Patthirippu is carried along the main road on footpaths to Rittageya is called Paavada Perahara.",
        esalaEvent4:"Kumbal Perahara",
        esalaEventDes4:"Kumbal Perahara means pottery items such as pots, earthen lamps and pans, which are required for the perahara season of the temple, are kept in a cauldron and offered in a perahara to the Natha temple.",
        esalaEvent3:"Feast of the Planting of Cups",
        esalaEventDes3:"In the hope of accomplishing the main goal of the Natha Temple Perahara in Weediyagoda, cup planting is done with determination according to the auspiciousness. Planting the cup, which is considered as a deity, means that the Perahara festival will be performed at the relevant time.",
        esalaEvent2:"New Year Festival",
        esalaEventDes2:"The New Year Festival of the Maha Vihara and Natha Temple in Weediyagoda is held annually in the month of April, starting with the Sinhala New Year. The ritual of anointing the head is basically done here. Monday 15th April 2024 at 10.17 AM",
        esalaEvent1:"New rice festival",
        esalaEventDes1:"The Sri Lankans who have made agriculture their livelihood since ancient times have been offering the top part of their harvest to the Buddha's three jewels and gods.Saturday 30 March 2024 at 7.00 am",

          contactUs:"Contact us",
          location:"Old Temple Road, Walikala, Pokunuwita",
          contactDescription:"Blending tradition, emotion, and everyday moments through visual storytelling. Celebrating Sri Lankan culture with every brushstroke",
          makeDonation:"Make a Donation",
          getIn:"Get in",
          touch:"touch",
          firstName:" First Name",
          secondName:" Second Name",
          email:"Email",
          subject:"Subject",
         message:"Your Message",
         submit:"SUBMIT",

         donate:"Donations",
         thanks:"Thank You",
         generosity:"for Your Generosity!",
         thanksPara:"Your willingness to support our temple is deeply appreciated. Your donation will help us continue our mission of providing a spiritual sanctuary and supporting our community. Please complete the form below to finalize your donation.",
         moneyBox:"Your donation supports our mission",
         moneyButton:"Donate and Support",

         home:"Home",
        about:"About us",
        sinhala:"සිංහල",

        footerLocation:"Location",
        quickLinks:"Quick Links",
        footerDescription:"Blending tradition, emotion, and everyday moments through visual storytelling. Celebrating Sri Lankan culture with every brushstroke"
        },
      },
      si: {
        translation: {
          templeName: "වීදියගොඩ මහා",
          templeNametwo: "විහාරය",
          homeDescription: "විමුක්තිය ඇත්තෝ ශීලයෙන් යුක්ත වෙති, වීර්යයෙන් ධර්මයෙහි හැසිරෙති. ආර්ය සත්‍ය අවබෝධයෙන් දුකෙන් මිදෙනවා. මාරයා කිසිවිටෙක ඔවුන් නිදහස් වන මාර්ගය සොයා නොගනී.",
          homedes:"(ධම්මපදය, පුප්ඵ වග්ගය)",
          homeAbout1: "වීදියගොඩ මහා විහාරය",
          descriptionOne:"ලක්දිව මායා රට රයිගම් කෝරළයේ පෞරාණික වීදියගොඩ මහා විහාරය පිහිටා ඇත.මෙම පුදබිම පැතිකඩ කිහිපයකින් වැදගත් වෙයි.රයිගම් කෝරළයේ ඉපැරණිම නාථ දේවාලයත් , ඒ හා සබැඳි ඇසළ පෙරහර මංගල්‍යයත්, පහතරට විකාශනය වූ සඟ පරපුරෙහි මූලායතනය  වීමත් යන කරුණුය. මහා විහාර පුදබිමේ භූගෝලීය පිහිටීමට අනුව සතර වටින්ම කෙතකින් වට වූ ගොඩනැගිල්ලක් සහිත ඇලමාර්ග දෙකකින් යුත් දූපතක් ලෙස ස්වභාවිකවම පිහිටා ඇති නිසා සතර දෙසින්ම යන එන පුද්ගලයන් පැහැදිලිව හඳුනාගත හැකිය.එනිසාම වීදියගොඩ මහා විහාර පුදබිම ආරක්ෂිත මුර පොලක් ලෙස වීදිය බණ්ඩාරයන් භාවිත කළ බව පැවසීම යුක්ති යුක්තය.",
          viewHistory: "",
          viewAll: "සියල්ල බලන්න",
          homeAbout2: "විහාරාධිපති පූජ්‍ය වල්ගම ධම්මින්ද හිමිපාණන් වහන්සේ",
          homeAbout22: "වීදියගොඩ මහා විහාරයේ විහාරාධිපති (විහාරාධිපති)",
          descriptionTwo:" ",
          events:"Events",
          year:"සිදුවීම්",
          esalaEvent:"ඇසළ මහා පෙරහැර",
          esalaEventdescription:"වීදියගොඩ නාථ දේවාල ඇසළ පෙරහර සියවස් ගණනක් ඉපැරණි ඓතිහාසික පෙරහරකි.මතු බුදු බව පතන නාථ දෙවියන්ට පුණ්‍යානුමෝදනා සිදුකිරීම සඳහා ඉමහත් භක්තියෙන් වීදියගොඩ ඇසළ පෙරහර පවත්වන්නට යෙදෙයි.මෙලෙස පැවැත්වෙන ඇසළ පෙරහර මාලාව පෙරහර දොළහකින් සහ දෙවොල්මඩු පූජෝත්සවයකින් සමන්විතය.",
          homeGallery:"Portfolio",
          aboutfour: "වීදියගොඩ නාථ දේවාලය",
          descriptionfour: "මතු බුදු බව ලබන දිව්‍යරාජයෙක් වශයෙන් හැඳින්වෙන නාථ දෙවිඳුන් අණසක පතුරු වන වීඩියෝගොඩ ගම්මානයේ ඉදිකර ඇති සිංහල රාජ සමයට අයත් ඓතිහාසික  දෙවොල මෙම ප්‍රදේශයේ විශාල ජනප්‍රියත්වයක් උසුලයි.යුව රජෙකු වශයෙන් රයිගම්බණ්ඩාර කුමරු රයිගම් කෝරළය පාලනය කළ සමයේ සතුරන්ගෙන් ගැලවීම සඳහා වීදියගොඩ ගම්මානයේ කලක් සැඟව සිටිය බවත්, ඒ සමයේ ඔහු   වීදියගොඩ මහා විහාරය ප්‍රතිසංස්කරණය කර මෙම නාථ දේවාලය ඉදි කළ බවත් ජනප්‍රවාදයේ කියැවේ.වැල්විල්ල ප්‍රදේශයෙන් හමු වූ ශිලා ලිපියානුව මෙම නාථ දේවාලය තුන්වන සේන රජුගේ රාජ්‍ය සමයේ පවා තිබූ බවක්ද කියැවේ.මෙසේ නාථ දේවාලය පිළිබඳ ජනප්‍රවාද කතා රැසක් පවතී. කෙසේවෙතත් එදා රජ දරුවන්  තැනූ ආකාරයෙන් අදත් දේවාලයේ ගල් අත්තිවරම, කළු ගලින් තැනූ උළුවහු, ගොම මැටි ගෑ බිම, ලී සරනේරු සවිකර තනන ලද දොර,විශාල ලී බාල්ක දක්නට ලැබේ.",
          descriptionthree: "About asala pereraha",
          aboutthree: "පෙරහර මංගල්‍යය",
          descriptionthree: "මතු බුදු බව පතන නාථ දෙවියන්ට පුණ්‍යානුමෝදනා සිදුකිරීම සඳහා ඉමහත් භක්තියෙන් වීදිය ගොඩ ඇසළ පෙරහර පවත්වන්නට යෙදෙන අතර රයිගම් කෝරළයේ පවත්වනු ලබන එකම ඓතිහාසික පෙරහර වන්නේද මෙම පෙරහර මංගල්‍යයයි.වර්තමානයේ පවත්වනු ලබන සියලු පෙරහර මෙයින් පසුව ආරම්භ වූ පෙරහර ලෙස සැලකේ.විහාරස්ථ කාර්ය සාධක සමිතිය  සහ දායක සභාව මූලික වීමෙන් විහාරාධිපති හිමිගේ මූලිකත්වයෙන් පෙරහර මංගල්‍යය සිදුකරනු ලබයි. මෙලෙස පැවැත්වෙන ඇසළ පෙරහර මාලාව කුඹල් පෙරහර මංගල්‍යය තුනක්, පාවඩ පෙරහර මංගල්‍ය තුනක්,වීදි පෙරහර මංගල්‍ය තුනක්,රන්දෝලි මහ පෙරහර මංගල්‍යයක්,දෙවේලේ පෙරහර මංගල්‍යයක්,දිය කැපුම් පෙරහර මංගල්‍යයක් (පෙරහර දොළහක්) සහ දෙවොල්මඩු පූජෝත්සවයකින් සමන්විත වේ.",

          youtube:"රන්දෝලි මහ පෙරහර",
          live:"සජීවී විකාශය",

         contactUs:"Contact us",
         location:"වීදියගොඩ මහා විහාරය බණ්ඩාරගම",
         contactDescription:"වීදියගොඩ විහාරය පිහිටා ඇත්තේ සශ්‍රීක හරිත පරිසරයක් මධ්‍යයේ සන්සුන් පරිසරයක, භාවනා කිරීමට සහ ආවර්ජනය කිරීමට සුදුසුම නිස්කලංක පරිසරයක්, නාගරික තදබදයෙන් බැහැරව, ස්වභාවික සුන්දරත්වයෙන් යුත් දර්ශනීය ප්‍රදේශයක ය.",
         makeDonation:"පරිත්‍යාගයක් කරන්න",
         getIn:"සම්බන්ධ",
         touch:"කරගන්න",
         firstName:" මුල් නම",
         secondName:" දෙවන නම",
         email:"විද්යුත් තැපෑල",
         subject:"විෂය",
        message:"ඔයාගේ පණිවිඩය",
        submit:"ඉදිරිපත් කරන්න",

        
        esalaEvent10:"දෙවොල් මඩු පූජෝත්සවය",
        esalaEventDes10:"වීදියගොඩ නාථ දේවාලයෙහි පෙරහර මාලාව අවසන්ව සත් දිනකට පසුව පහත රට රයිගම්කෝරලයට ආවේණික පරිද්දෙන් දෙවොල්මඩු මංගල්‍යයක් පවත්වයි. එය වීදියගොඩ පෙරහර මංගල්‍යයේ සමාප්තියයි. වීදියගොඩ දෙවොල්මඩු මංගල්‍යය නාථ දේවාලය ඉදිවී පෙරහර ආරම්භ වීම තරම්ම ඈතට විහිද යන්නකි.නාථ දෙවියන් ප්‍රමුඛ කොටගත් පත්තිනි දේවිය ඇතුළු සියලු දෙවියන්ට පින්දීමේ අරමුණත්, පෙරහර මංගල්‍යයට සහභාගි වූ සියල්ලන්ගේ වස්දොස් දුරැර සෙත්පැතීමත්, කෘෂිකාර්මික සශ්‍රීකත්වයට දේවාශීර්වාදය ලබා ගැනීමත් වීදියගොඩ දෙවොල්මඩු  මංගල්‍යය පැවැත්වීමේ ප්‍රධාන අරමුණු අතර වෙයි.",
        esalaEvent9:"පඬුරු පූජා කිරීමේ චාරිත්‍රය",
        esalaEventDes9:"පුරාණ චාරිත්‍රයට අනුව පළමු පාවාඩ පෙරහර දිනයේ උදෑසන හෝ සවස් කාලයේ සුභ නැකතින් නාථ දේවාලයට පඬුරු දැමීම ආරම්භ කරයි.නාථ දේවාලයට පඬුරු දැමීමට ප්‍රථමව චෛත්‍යය, බෝධිය, විහාරය යන ස්ථානවලට පඬුරු පුදයි.දේවාලයන්ට පඬුරු පිදීමෙන් පසු කපු මහතා යාතිකා කොට සෙත් පතයි.අමු කහ සහ දෙහි යුෂ වලින් සෝදාගත් කාසි කිහිපයක් බුලත් සහ අමු කහ කොළ මත තබා කහ කැබැල්ලක්ද සමඟින් 'පඬුරු පිදීම' සිදුකරනු ලබයි",
        esalaEvent8:"දියකපා ගෙවදීමේ දවල් පෙරහර",
        esalaEventDes8:"ගජබා රජු දියදෙබෑකොට ඉන්දියාවට ගොස් ලාංකික සිරකරුවන් හා පාත්‍රා ධාතුව මෙරටට වැඩවමවීමේ පුවතින් පසු දිය කැපීමේ චාරිත්‍රය පෙරහර සංස්කෘතියට එක් වූ බව එක් විචාරක මතයකි.කපු මහතුන් ගඟ මැදදී රන්කඩුවෙන් ගඟදිය දෙබෑකොට, දියකල කීපයක් ලබා ගැනීම මෙහිදී සිදුකරයි.ඉන් එක්දිය කලයක් ලබන වර්ෂයේ පෙරහර මංගල්‍ය පවත්වන තුරු සුරැකිව තබා ගැනීම සිරිතයි.ගං තොට දක්වා ගමන් කිරීමට පිටත් වන පෙරහර සතර වීදියේ ගමන් කලද රිට්ටාගෙට ගෙවදීම සිදු නොකරයි.",
        esalaEvent7:"රන්දෝලි මහ පෙරහර මංගල්‍යය",
        esalaEventDes7:"වීදියගොඩ නාථ දේවාල ඇසළ පෙරහර මංගල්‍යයේ දින හතක් දේවාල පෙරහර පවත්වා අටවෙනි දින රන්දෝලි පෙරහර හෙවත් එක්වේලේ පෙරහර වීථි සංචාරය කරයි.පෙරහර මාලාවේ ප්‍රධානම පෙරහර රන්දෝලි පෙරහරයි.'රන්දෝලාව' නැතහොත් දේවාභරණ වඩමවමින් පෙරහරෙහි  ගෙන යන රන්දෝලිය නිසාවෙන් මෙම පෙරහරට රන්දෝලි පෙරහර යැයි අතීතයේ පටන් භාවිතා වී ඇති බව පෙනී යයි.",
        esalaEventDes77:"මතු බුදු බව පතන නාථ දෙවියන්ට පුණ්‍යානුමෝදනා සිදුකිරීම සඳහා ඉමහත් භක්තියෙන් වීදිය ගොඩ ඇසළ පෙරහර පවත්වන්නට යෙදෙන අතර රයිගම් කෝරළයේ පවත්වනු ලබන එකම ඓතිහාසික පෙරහර වන්නේද මෙම පෙරහර මංගල්‍යයයි.වර්තමානයේ පවත්වනු ලබන සියලු පෙරහර මෙයින් පසුව ආරම්භ වූ පෙරහර ලෙස සැලකේ.විහාරස්ථ කාර්ය සාධක සමිතිය  සහ දායක සභාව මූලික වීමෙන් විහාරාධිපති හිමිගේ මූලිකත්වයෙන් පෙරහර මංගල්‍යය සිදුකරනු ලබයි. මෙලෙස පැවැත්වෙන ඇසළ පෙරහර මාලාව කුඹල් පෙරහර මංගල්‍යය තුනක්, පාවඩ පෙරහර මංගල්‍ය තුනක්,වීදි පෙරහර මංගල්‍ය තුනක්,රන්දෝලි මහ පෙරහර මංගල්‍යයක්,දෙවේලේ පෙරහර මංගල්‍යයක්,දිය කැපුම් පෙරහර මංගල්‍යයක් (පෙරහර දොළහක්) සහ දෙවොල්මඩු පූජෝත්සවයකින් සමන්විත වේ.",
        esalaEvent6:"වීදි පෙරහර",
        esalaEventDes6:"වීදියගොඩ නාථ දේවාලය මැදිවන සේ පිහිටා ඇති සතර වීදියෙහි  පවත්වනු ලබන පෙරහර වීදි පෙරහර නම් වෙයි.වීදි පෙරහර දින දෙකකි.පළමු දින එක්වටයක්ද දෙවන දින දෙවටක්ද වීදි පෙරහර සතර වීදියේ වීථි සංචාරය කරයි.",
        esalaEvent5:"පාවාඩ පෙරහර",
        esalaEventDes5:" සේසාත් මුර ආයුධ ඇතිව නාථ දේවාල පත්තිරිප්පුවේ තැන්පත් කොට ඇති දේවාභරණ රිට්ටාගෙය දක්වා මහවීදිය ඔස්සේ පාවාඩ මතින් වැඩමවාගෙන යාම පාවාඩ පෙරහර ලෙස හඳුන්වයි.",
        esalaEvent4:"කුඹල් පෙරහර",
        esalaEventDes4:"කුඹල් පෙරහර යන්නෙන් අදහස් වන්නේ දේවාලයේ පෙරහර සමයට අවශ්‍ය කරන හට්ටි,මුට්ටි,මැටි පහන්,කොතල, කලස් ආදී වූ මැටි භාණ්ඩ කදක තබාගෙන පෙරහරකින් පැමිණ නාථ දේවාලයට පූජා කිරීමයි.අතීතයේදී මෙය කුඹල් කර්මාන්තය කළ පුද්ගලයන් විසින් ඉතා ගෞරවයෙන්, දේවාශිර්වාදය ලැබීම පිණිස ඉටු කළ කාර්යයකි.",
        esalaEvent3:"කප් සිටුවීමේ මංගල්‍යය",
        esalaEventDes3:"වීදියගොඩ නාථ දේවාල පෙරහරෙහි ප්‍රමුඛාර්ථය මුදුන් පමුණුවා ගැනීමේ අපේක්ෂාවෙන් අධිෂ්ඨානශීලීව නැකතට අනුව කප් සිටුවීම සිදුකරනු ලබයි.දේවකාරියක් ලෙස සලකන කප් සිටුවීමෙන් අරුත් දක්වන්නේ ස්ථිරවම පෙරහර මංගල්‍ය අදාළ කාලවකවානුවේදී සිදුකරනු ලබන බවයි.කප සිටුවා දේවාශිර්වාදයෙන් පෙරහර මංගල්‍යයන්ට මූලාරම්භය සකසයි.",
        esalaEvent2:"අවුරුදු මංගල්‍යය",
        esalaEventDes2:"වීදියගොඩ  මහා විහාරයේ සහ නාථ දේවාලයේ අවුරුදු මංගල්‍යය සිංහල අලුත් අවුරුද්ද මුල්කොට ගනිමින් බක් මාසයේදී වාර්ෂිකව පවත්වනු ලබයි. හිස තෙල් ගෑමේ චාරිත්‍රය මෙහිදී මූලික වශයෙන් සිදුවේ. ",
        esalaEvent1:"අලුත් සහල් මංගල්‍යය",
        esalaEventDes1:" කෘෂිකර්මය  ජීවනෝපායක් කොටගත් ලාංකිකයෝ පුරාණයේ සිටම තමන්ගේ අස්වැන්නේ අග්‍ර කොටස බුද්ධාදී ත්‍රිවිධ රත්නය සහ දෙවියන් උදෙසා පූජා කිරීම නොපිරිහෙලා සිදු කළෝය.අලුත් සහල් මංගල්‍යය නමින් සිදු කෙරෙන මෙම පූජා උත්සවය වීදියගොඩ මහා විහාරය මුල්කොට ගනිමින් සුභ දිනයක් අලළා සිදු කෙරෙයි. ",

        donate:"පරිත්‍යාග",
        thanks:"ඔබට ස්තූතියි",
        generosity:"ඔබේ ත්යාගශීලීත්වය සඳහා!",
        thanksPara:"අපගේ විහාරස්ථානයට සහයෝගය දැක්වීමට ඔබ දක්වන කැමැත්ත ඉතා අගය කොට සලකමි. ඔබගේ පරිත්‍යාගය අපට අධ්‍යාත්මික අභයභූමියක් සැපයීමේ සහ අපගේ ප්‍රජාවට සහයෝගය දැක්වීමේ අපගේ මෙහෙවර දිගටම කරගෙන යාමට උපකාරී වනු ඇත. ඔබගේ පරිත්‍යාගය අවසන් කිරීමට කරුණාකර පහත පෝරමය සම්පූර්ණ කරන්න.",
        moneyBox:"ඔබගේ පරිත්‍යාගය අපගේ මෙහෙවරට සහාය වේ",
        moneyButton:"පරිත්‍යාග කර සහයෝගය දෙන්න",

        home:"Home",
        about:"About us",
        sinhala:"සිංහල",

        footerLocation:"ස්ථානය",
        quickLinks:"ඉක්මන් සබැඳි",
        footerDescription:"වීදියගොඩ මහා විහාරය ලෙසින්ද හැඳින්වෙන වීදියගොඩ විහාරය ශ්‍රී ලංකාවේ කැපී පෙනෙන අධ්‍යාත්මික හා සංස්කෘතික ස්ථානයකි, එහි සාමකාමී වාතාවරණය සහ සුවිශේෂී ගෘහ නිර්මාණ ශිල්පය සඳහා ගෞරවයට පාත්‍ර වේ.",
    },
      },
    },
  });

export default i18n;
