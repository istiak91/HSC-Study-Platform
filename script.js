const subjects = {
  phy1: {
    name: "Physics 1st Paper (পদার্থবিজ্ঞান ১ম পত্র)",
    chapters: [
      { title: "Chapter 1: ভৌতজগৎ ও পরিমাপ", link: "https://youtube.com/playlist?list=PLHIUH80VdpAr2K-M2YTpEg5TQupvxeGa1&si=TVz0cb6HyrcxDLD5" },
      { title: "Chapter 2: ভেক্টর", link: "https://youtube.com/playlist?list=PLctDpDSJddXIxrVvwoRzwOCbWeHgkfPWk&si=pdCTJmzlSX6JSUTX" },
      { title: "Chapter 3: গতিবিদ্যা", link: "https://youtube.com/playlist?list=PLxSt9YDBipm7Okm3wCd4hrRCofjxVEeSr&si=lroS4mzB0zfu7Amt" },
      { title: "Chapter 4: নিউটনীয় বলবিদ্যা", link: "https://youtube.com/playlist?list=PLaK_mCiMGdJ05hpWxY7yJ1GJbAZxPRtqg&si=MlRMzntQbbUuxMPa" },
      { title: "Chapter 5: কাজ, ক্ষমতা ও শক্তি", link: "https://youtube.com/playlist?list=PLxSt9YDBipm5f8M-zxOPUvxLYZJLUHjVA&si=MSvWlaVamH3IOFvo" },
      { title: "Chapter 6: মহাকর্ষ ও অভিকর্ষ", link: "https://youtube.com/playlist?list=PLctDpDSJddXIe0_Mue_dBhY1h3XFF4wZ-&si=5KwiJ7aANDsKyLto" },
      { title: "Chapter 7: পদার্থের গাঠনিক ধর্ম", link: "https://youtube.com/playlist?list=PLubWB9tWo5lXkCdZ7-jQLYTVw9jFfg3EN&si=6q8mGU597hf_VCCu" },
      { title: "Chapter 8: পর্যায়বৃত্ত গতি", link: "https://youtu.be/K-OzRLh5700?si=J0GGlJabcJP8yfF5" },
      { title: "Chapter 9: তরঙ্গ", link: "https://youtube.com/playlist?list=PLaK_mCiMGdJ1taCsxIyZkMIICJvmH2DBX&si=eREa7iwiO2F-Tksv" },
      { title: "Chapter 10: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব", link: "https://youtube.com/playlist?list=PLgiRmHToIpRfqd6pGH_rgUWve6zhwyeTd&si=hdGekZ-5ZlF7CiWL" }
    ]
  },
  phy2: {
    name: "Physics 2nd Paper (পদার্থবিজ্ঞান ২য় পত্র)",
    chapters: [
      { title: "প্রথম অধ্যায়: তাপগতিবিদ্যা", link: "https://youtube.com/playlist?list=PLctDpDSJddXKONKKoK_TsEhFjs9C_10Ji&si=ODtFwxhcibnP8g8B" },
      { title: "দ্বিতীয় অধ্যায়: স্থির তড়িৎ", link: "https://youtube.com/playlist?list=PLaK_mCiMGdJ1Q9OHGVXpzkCNSWZEdzstk&si=Uc8f8bAJ0Sx7eqnq" },
      { title: "তৃতীয় অধ্যায়: চল তড়িৎ", link: "https://youtube.com/playlist?list=PLctDpDSJddXII8JUfN9swllVPTAivdnHU&si=dl7RiomG9U2mzIm5" },
      { title: "চতুর্থ অধ্যায়: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া", link: "https://youtube.com/playlist?list=PLubWB9tWo5lWyCu6dSB0tgF6JaqhC7SpG&si=2oHKhJftyzsBSKcz" },
      { title: "পঞ্চম অধ্যায়: তড়িতচৌম্বকীয় আবেশ", link: "https://youtube.com/playlist?list=PLeQTYF3HAbi3ctV9ua5TdmclzXjTGNLwd&si=to30l-DmWj61Z6_q" },
      { title: "ষষ্ঠ অধ্যায়: জ্যামিতিক আলোকবিজ্ঞান", link: "https://youtube.com/playlist?list=PLxSKY6e-oLycVZ9w8Oal8mPyIQlGSqzbF&si=aThnK91IRgyzP_sS" },
      { title: "সপ্তম অধ্যায়: ভৌত আলোকবিজ্ঞান", link: "https://youtube.com/playlist?list=PLGJJxey9EhkBZJi483W_s_vMS2KFOtGvr&si=0cBb1r_Bziezc52n" },
      { title: "অষ্টম অধ্যায়: আধুনিক পদার্থবিজ্ঞানের সূচনা", link: "https://youtube.com/playlist?list=PLXVDhFlxdHuFjFElc0xAq4FU6g1SZM5ob&si=65NBhp2HeoTZ7u7o" },
      { title: "নবম অধ্যায়: পরমাণুর মডেল ও নিউক্লিয়াস", link: "https://youtube.com/playlist?list=PLO-9dFwcpuRz3JRUkEU3pbKQqkkt6WPYQ&si=29_h0RJDYf-xPdlc" },
      { title: "দশম অধ্যায়: সেমিকন্ডাকটর ও ইলেকট্রনিকস", link: "https://youtube.com/playlist?list=PLEQG3WKXdD3dWw4UmfJtfYP2zVsEeBVYI&si=3yfozlALE7-79WBr" },
      { title: "একাদশ অধ্যায়: জ্যোতির্বিজ্ঞান", link: "https://youtube.com/playlist?list=PLxSt9YDBipm4Ipenex0zPdVI-Gic4Nx34&si=KPrITHPc9bA-iS_Y" }
    ]
  },
  chem1: {
    name: "Chemistry 1st Paper (রসায়ন ১ম পত্র)",
    chapters: [
      { title: "দ্বিতীয় অধ্যায়: গুণগত রসায়ন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm7kClgPBo-zO25WqHiarBwZ&si=HcAcSTXvp8E-ns2Q" },
      { title: "তৃতীয় অধ্যায়: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm6KoCk_D7J2r6UjwkYanZxQ&si=QApjCkpnVnx1Y5cy" },
      { title: "চতুর্থ অধ্যায়: রাসায়নিক পরিবর্তন", link: "https://youtube.com/playlist?list=PL2MAu5P_yY9vVBXJuoAm4CTXzZGKZ8Yba&si=JadvRwRtYhBU3B_8" },
      { title: "পঞ্চম অধ্যায়: কর্মমুখী রসায়ন", link: "https://youtu.be/jRT3nJSi2XA?si=T_x7idRsNISE9K9l" }
    ]
  },
  chem2: {
    name: "Chemistry 2nd Paper (রসায়ন ২য় পত্র)",
    chapters: [
      { title: "প্রথম অধ্যায়: পরিবেশ রসায়ন", link: "https://youtube.com/playlist?list=PL1GVU-Q4Oos4OHtGpigYb_qGiqOr5fwVD&si=0pmLwlCNRV9uyvCA" },
      { title: "দ্বিতীয় অধ্যায়: জৈব রসায়ন", link: "https://youtube.com/playlist?list=PLwSv-teaUzyHvUihLJHsToSQUtpzOiuGs&si=7lezC5etoywk4Lvj" },
      { title: "তৃতীয় অধ্যায়: পরিমাণগত রসায়ন", link: "https://youtube.com/playlist?list=PLwSv-teaUzyFEfR4U7uMWZRTfdOtsLUoB&si=a3uJIL0vhgd5Ux8m" },
      { title: "চতুর্থ অধ্যায়: তড়িৎ রাসায়ন", link: "https://youtu.be/lJoeZDLsU64?si=uys63mcK8BDjk7KB" },
      { title: "পঞ্চম অধ্যায়: অর্থনৈতিক রসায়ন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm5kTdyXvMk7HgRooRIFkg0j&si=fKNdEO8AcU8lD341" }
    ]
  },
  bio1: {
    name: "Biology 1st Paper (জীববিজ্ঞান ১ম পত্র)",
    chapters: [
      { title: "Chapter 1: কোষ ও এর গঠন", link: "https://youtube.com/playlist?list=PLBIUjjCw0wBJi4ydjzjiE6NdwgyVMIKLk&si=tD3DtCXw4pf3A6Wr" },
      { title: "Chapter 2: কোষ বিভাজন", link: "https://youtube.com/playlist?list=PLCsQ0bReSVTi0lTN07gd6TzOGF0V5Uk-V&si=rYU6TLuwJn4XJX3P" },
      { title: "Chapter 3: কোষ রসায়ন", link: "https://youtube.com/playlist?list=PLH5tmLzPkkeCQ6iCzg3sVdvr_KTTYU_HC&si=gmjwFy4F6OOvyx0T" },
      { title: "Chapter 4: অণুজীব", link: "https://youtube.com/playlist?list=PL3CE903B9YYkqy6OXuir7dWi6c5eUg4m_&si=vvN4leFizlAhbXm7" },
      { title: "Chapter 5: শৈবাল ও ছত্রাক", link: "https://youtu.be/PJlBI7ZIwgI?si=RkDigaQ6zMVDD05G" },
      { title: "Chapter 6: ব্রায়োফাইটা ও টেরেডোফাইটা", link: "https://youtube.com/playlist?list=PLcJGjF8QBSfQaL1l0YkIEBPow13bD6010&si=hQ159UC7jEIMp6zg" },
      { title: "Chapter 7: নগ্নবীজী ও আবৃতবীজী উদ্ভিদ", link: "https://youtu.be/8VQz4LundGQ?si=PP3wYfEWYcnSkJb_" },
      { title: "Chapter 8: টিস্যু ও টিস্যুতন্ত্র", link: "https://youtu.be/Ty9fLSFr_ko?si=s5uVoOxnhSdOQ8B1" },
      { title: "Chapter 9: উদ্ভিদ শারীরতত্ত্ব", link: "https://youtube.com/playlist?list=PLCreR8YWEKTwHQ_xg8GdzzMqRwKgbT7AA&si=lA-ekcYhEpHfhZkT" },
      { title: "Chapter 10: উদ্ভিদ প্রজনন", link: "https://youtu.be/ScY_GDOBj5o?si=YARMxm9BUvJVUTU_" },
      { title: "Chapter 11: জীবপ্রযুক্তি", link: "https://youtube.com/playlist?list=PL8Iny1AZ3bHbzCKOQfb6ho7JHT_G9Jpy1&si=Pp4pQDvM7GKFgm52" },
      { title: "Chapter 12: জীবের পরিবেশ বিস্তার ও সংরক্ষণ", link: "https://youtu.be/0IWLMx41nGc?si=jO2ONrxMrVDkDyvS" }
    ]
  },
  bio2: {
    name: "Biology 2nd Paper (জীববিজ্ঞান ২য় পত্র)",
    chapters: [
      { title: "Chapter 1: প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস", link: "https://youtube.com/playlist?list=PL3fBB5-oEa1zaOkfBlRvRmZPiimHbRJ6B&si=26gswaNIVQY4S8yj" },
      { title: "Chapter 2: প্রাণীর পরিচিতি", link: "https://youtube.com/playlist?list=PLcJGjF8QBSfTCnp1ORS4LyOpfyRm5p7Sy&si=KvCjQamlHlDtvPse" },
      { title: "Chapter 3: পরিপাক ও শোষণ", link: "https://youtu.be/XZjmBNlFpiY?si=JPRHW9CnJGqDXNjD" },
      { title: "Chapter 4: রক্ত সংবহন", link: "https://youtu.be/15uuq09AXKs?si=ajzSazw24ospiUXw" },
      { title: "Chapter 5: শ্বাসক্রিয়া ও শ্বসন", link: "https://youtube.com/playlist?list=PLcJGjF8QBSfSIL6Tisq-AWNROOSwuDXfc&si=AbT18Hs0pcMuxiaS" },
      { title: "Chapter 6: বর্জ্য ও নিষ্কাশন", link: "https://youtube.com/playlist?list=PL-yW_NyGL-aDQ0BYImvPGGeLZR-TnRkEN&si=yz5Dst62WaaTLY3I" },
      { title: "Chapter 7: চলন ও অঙ্গচালনা", link: "https://youtu.be/zIG6KsPxhqk?si=ElVeg92N4B7BCqfN" },
      { title: "Chapter 8: সমন্বয় ও নিয়ন্ত্রণ", link: "https://youtube.com/playlist?list=PL_K0gvrPYhg8-fdcJJWy3D-uBEHU3kwPg&si=Nre1bFx1hHzPRhj5" },
      { title: "Chapter 9: মানব জীবনের ধারাবাহিকতা", link: "https://youtube.com/playlist?list=PLTDHniERUqmanuBJah612mVBpCOw_Mult&si=Uzw8X3A131JWly-h" },
      { title: "Chapter 10: মানবদেহের প্রতিরক্ষা", link: "https://youtu.be/JBl5xhWr7PI?si=LhbpmQMm4pKSSFhn" },
      { title: "Chapter 11: জিনতত্ত্ব ও বিবর্তন", link: "https://youtu.be/CW25exsk6bk?si=BEHnLF4IM1JmewFx" },
      { title: "Chapter 12: প্রাণীর আচরণ", link: "https://youtube.com/playlist?list=PLn5NEUynyVcPxbXmhZ_-2OQ65ZDT2FEIW&si=fTCXrN6_hffUrqrB" }
    ]
  },
  math1: {
    name: "Higher Math 1st Paper (উচ্চতর গণিত ১ম পত্র)",
    chapters: [
      { title: "Chapter 1: ম্যাট্রিক্স ও নির্ণায়ক", link: "https://youtube.com/playlist?list=PLBIUjjCw0wBICsUln-79ybLqTPE0TNV7F&si=Cga0eIDZAlCdDjGB" },
      { title: "Chapter 2: ভেক্টর", link: "https://youtube.com/playlist?list=PLXVDhFlxdHuHACxYvGAUxFUz_OELOmBUn&si=9vKZGMMH3Yu971PS" },
      { title: "Chapter 3: সরলরেখা", link: "https://youtube.com/playlist?list=PL4XrhAetwHqEg4CmE2jRO9lUCT-Y6cvvp&si=VUadCDUe1xDNvdr5" },
      { title: "Chapter 4: বৃত্ত", link: "https://www.youtube.com/playlist?list=PL4XrhAetwHqFKt8jM-BcWl1fDbAcDYBBj" },
      { title: "Chapter 5: বিন্যাস ও সমাবেশ", link: "https://youtube.com/playlist?list=PLTSVnOmytu8720IV29o4PZJUMpzjaU3c2&si=WBAVONL4UQ2stvDK" },
      { title: "Chapter 6: ত্রিকোণমিতিক অনুপাত", link: "https://youtube.com/playlist?list=PLinnkrP6VC2Kxe4YbeQeZjewqOjvzLahF&si=peCO5Pd33m9bzho9" },
      { title: "Chapter 7: সংযুক্ত কোণের ত্রিকোণমিতিক অনুপাত", link: "https://www.youtube.com/playlist?list=PLBIUjjCw0wBKKeYVjsVLYXYOz59Fjx7os" },
      { title: "Chapter 8: ফাংশন ও ফাংশনের লেখচিত্র", link: "https://youtube.com/playlist?list=PLBIUjjCw0wBJ0mVRQ39Xn5LIjW_tWoUTR&si=BIRNLDuV-BHJouRB" },
      { title: "Chapter 9: অন্তরীকরণ", link: "https://www.youtube.com/playlist?list=PL4XrhAetwHqGQm0nWooXdj3OwykPsl_ul" },
      { title: "Chapter 10: যোগজীকরণ", link: "https://www.youtube.com/playlist?list=PLBIUjjCw0wBLIsv-Gwpl7CA7DEPnLz1e3" }
    ]
  },
  math2: {
    name: "Higher Math 2nd Paper (উচ্চতর গণিত ২য় পত্র)",
    chapters: [
      { title: "Chapter 1: বাস্তব সংখ্যা ও অসমতা", link: "https://www.youtube.com/playlist?list=PLbmVV5PCaiWYs47F4eE2nc9tO2oGiW4Fm" },
      { title: "Chapter 2: যোগাশ্রয়ী প্রোগ্রাম", link: "https://www.youtube.com/playlist?list=PLbmVV5PCaiWawQZOFczqcujp35nlu66vM" },
      { title: "Chapter 3: জটিল সংখ্যা", link: "https://www.youtube.com/playlist?list=PLBIUjjCw0wBJ-8aYGkfb6BMmkfXwK4Vmz" },
      { title: "Chapter 4: বহুপদী ও বহুপদী সমীকরণ", link: "https://youtube.com/playlist?list=PL4XrhAetwHqGq3JckuI5VpsqPxJNX_Rba&si=UFf4D6B975muylh7" },
      { title: "Chapter 5: দ্বিপদী বিস্তৃতি", link: "https://www.youtube.com/playlist?list=PLTSVnOmytu86Sifvf0wHTvCjcRSE27yq4" },
      { title: "Chapter 6: কনিক", link: "https://www.youtube.com/playlist?list=PL4XrhAetwHqHkLYAeN5UVXPhEjULsro4x" },
      { title: "Chapter 7: বিপরীত ত্রিকোণমিতিক ফাংশন ও ত্রিকোণমিতিক সমীকরণ", link: "https://www.youtube.com/playlist?list=PLsaQk_omd3fIUdI2yhXi1nw2IOkcsszp5" },
      { title: "Chapter 8: স্থিতিবিদ্যা ", link: "https://youtube.com/playlist?list=PL4XrhAetwHqGN9r3yicJ0cl7Ufnml9e2j&si=nY-hd5xt8L-4FfdW" },
      { title: "Chapter 9: সমতলে বস্তুকণার গতি", link: "https://www.youtube.com/playlist?list=PL4XrhAetwHqHs3tCStMlF7Ln1dCbQKD-j" },
      { title: "Chapter 10: বিস্তার পরিমাপ ও সম্ভাবনা", link: "https://www.youtube.com/playlist?list=PLTSVnOmytu85zY8rUt3xcMhtxlIGQocEm" }
    ]
  },
  
  eng2: {
    name: "English 2nd Paper",
    chapters: [
      { title: "Articles", link: "https://youtu.be/4n3SKm3FTms?si=sGMZD7YxzRw5mx-9" },
      { title: "Preposition", link: "https://www.youtube.com/watch?v=kTkKO-FJcx4&t=880s" },
      { title: "Clauses and Phrase", link: "https://youtu.be/iwo3-qJf5LA?si=D7mdvdNoljU4DnYY" },
      { title: "Right Forms of Verbs", link: "https://youtu.be/fxbq1WdmHP0?si=2twNokLp1N-sTsoN" },
      { title: "Right Forms of Verbs-2", link: "https://www.youtube.com/live/PBa4jIdGGRw?si=McrTMbKr0HbQn41k" },
      { title: "Changing Sentences", link: "https://youtube.com/playlist?list=PL7cXE6nk3Ep3_BLgrVF-JUrH4rt941mDV&si=WqF2TfJ-Uw5aytPb" },
      { title: "Narration", link: "https://youtube.com/playlist?list=PL7cXE6nk3Ep3KnvpaBglnYElX2LuNWeWQ&si=bfNT2oTIIIabJ5NC" },
      { title: "Pronoun Referencing", link: "https://youtu.be/TDbGisW4Kno?si=LbMhWIfia3z4CJYG" },
      { title: "Modifiers", link: "https://youtu.be/Zw3LF1LW40A?si=kH2zOr7CAov9rwpr" },
      { title: "Sentence Connectors", link: "https://youtu.be/Mn7C1XNgQkc?si=jGRHjECMdkrX-mE6" },
      { title: "Synonyms & Antonyms", link: "https://youtu.be/Loud25QzgoI?si=WfAqQpLCobC1pAro" },
      { title: "Punctuation", link: "https://youtu.be/ZPEs7xQShyU?si=FEaqUAzC6HA-JCQI" }
    ]
  },

  ict: {
    name: "ICT",
    chapters: [
      { title: "অধ্যায় ২: কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং", link: "https://youtu.be/9kLNeT-MTNw?si=GDARZIJhhfMXQqtd" },
      { title: "অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস", link: "https://youtube.com/playlist?list=PLxSt9YDBipm6RQTubQ2BAQVSgoRaHkLB6&si=e3Va6FmH26gUXiSx" },
      { title: "অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি এবং এইচটিএমএল", link: "https://youtube.com/playlist?list=PLJJqNbHzTfgY3KGPOV0Tow58UkhCZ4Myj&si=HrOPOh36hg0wdfKU" },
      { title: "অধ্যায় ৫: প্রোগ্রামিং ভাষা", link: "https://youtube.com/playlist?list=PLnZ9KY8JVTgqAQ9BMloGEQHu_99C3hfkn&si=mPFHPotjFZujhQH5" },
      { title: "অধ্যায় ৬: ডেটাবেস ম্যানেজমেন্ট সিস্টেম", link: "https://youtube.com/playlist?list=PLnZ9KY8JVTgr55B30QW0Bmr4UREZGz_wO&si=GKf8dwXNPxHqBIqc" }
    ]
  }
};

function convertYouTubeLink(link) {
  if (link.includes("playlist?list=")) {
    const listId = link.split("list=")[1].split("&")[0];
    return `https://www.youtube.com/embed/videoseries?list=${listId}`;
  } else if (link.includes("youtu.be/")) {
    const videoId = link.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else if (link.includes("watch?v=")) {
    const videoId = link.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  } else {
    return link;
  }
}

function showSubject(key) {
  document.querySelector(".subject-container").classList.add("hidden");
  const section = document.getElementById("chapter-section");
  section.classList.remove("hidden");
  document.getElementById("subject-title").innerText = subjects[key].name;

  const list = document.getElementById("chapter-list");
  list.innerHTML = "";

  const readChapters = JSON.parse(localStorage.getItem(`read_${key}`)) || [];

  subjects[key].chapters.forEach((ch, index) => {
    const isRead = readChapters.includes(index);
    list.innerHTML += `
      <div class="chapter ${isRead ? "read" : ""}" id="chapter-${index}">
        <button onclick="openVideo('${ch.link}')">${ch.title}</button>
        <button class="mark-btn" onclick="markAsRead('${key}', ${index})">
          ${isRead ? "✓ Read" : "Mark as Read"}
        </button>
      </div>
    `;
  });

  updateProgress(key);
}


function openVideo(link) {
  const embedLink = convertYouTubeLink(link);
  const player = document.getElementById("yt-player");
  const frame = document.getElementById("video-frame");
  player.src = embedLink;
  frame.classList.remove("hidden");
  window.scrollTo({ top: frame.offsetTop, behavior: "smooth" });
}

function goBack() {
  document.querySelector(".subject-container").classList.remove("hidden");
  document.getElementById("chapter-section").classList.add("hidden");
  document.getElementById("video-frame").classList.add("hidden");
  document.getElementById("yt-player").src = "";
}

function markAsRead(subjectKey, index) {
  let readChapters = JSON.parse(localStorage.getItem(`read_${subjectKey}`)) || [];
  if (!readChapters.includes(index)) {
    readChapters.push(index);
    localStorage.setItem(`read_${subjectKey}`, JSON.stringify(readChapters));
    document.getElementById(`chapter-${index}`).classList.add("read");
    document.querySelector(`#chapter-${index} .mark-btn`).innerText = "✓ Read";
  } else {
    readChapters = readChapters.filter(i => i !== index);
    localStorage.setItem(`read_${subjectKey}`, JSON.stringify(readChapters));
    document.getElementById(`chapter-${index}`).classList.remove("read");
    document.querySelector(`#chapter-${index} .mark-btn`).innerText = "Mark as Read";
  }
  updateProgress(subjectKey);
}

function updateProgress(subjectKey) {
  const total = subjects[subjectKey].chapters.length;
  const readChapters = JSON.parse(localStorage.getItem(`read_${subjectKey}`)) || [];
  const percent = Math.round((readChapters.length / total) * 100);

  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");

  bar.style.width = percent + "%";
  text.textContent = `Progress: ${percent}%`;
}

