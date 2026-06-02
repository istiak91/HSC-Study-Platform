// ------------------------------------------------------------------
// HSC STUDY HUB - COMPLETE DATA & LOGIC
// Back button support (Windows/Mobile), YouTube embed fix, auto-scroll
// ------------------------------------------------------------------

const subjects = {
  phy1: { name: "⚛️ পদার্থবিজ্ঞান ১ম পত্র", icon: "fas fa-atom", chapters: [
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
  ] },
  phy2: { name: "⚛️ পদার্থবিজ্ঞান ২য় পত্র", icon: "fas fa-atom", chapters: [
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
  ] },
  chem1: { name: "🧪 রসায়ন ১ম পত্র", icon: "fas fa-flask", chapters: [
    { title: "দ্বিতীয় অধ্যায়: গুণগত রসায়ন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm7kClgPBo-zO25WqHiarBwZ&si=HcAcSTXvp8E-ns2Q" },
    { title: "তৃতীয় অধ্যায়: মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm6KoCk_D7J2r6UjwkYanZxQ&si=QApjCkpnVnx1Y5cy" },
    { title: "চতুর্থ অধ্যায়: রাসায়নিক পরিবর্তন", link: "https://youtube.com/playlist?list=PL2MAu5P_yY9vVBXJuoAm4CTXzZGKZ8Yba&si=JadvRwRtYhBU3B_8" },
    { title: "পঞ্চম অধ্যায়: কর্মমুখী রসায়ন", link: "https://youtu.be/jRT3nJSi2XA?si=T_x7idRsNISE9K9l" }
  ] },
  chem2: { name: "🧪 রসায়ন ২য় পত্র", icon: "fas fa-flask", chapters: [
    { title: "প্রথম অধ্যায়: পরিবেশ রসায়ন", link: "https://youtube.com/playlist?list=PL1GVU-Q4Oos4OHtGpigYb_qGiqOr5fwVD&si=0pmLwlCNRV9uyvCA" },
    { title: "দ্বিতীয় অধ্যায়: জৈব রসায়ন", link: "https://youtube.com/playlist?list=PLwSv-teaUzyHvUihLJHsToSQUtpzOiuGs&si=7lezC5etoywk4Lvj" },
    { title: "তৃতীয় অধ্যায়: পরিমাণগত রসায়ন", link: "https://youtube.com/playlist?list=PLwSv-teaUzyFEfR4U7uMWZRTfdOtsLUoB&si=a3uJIL0vhgd5Ux8m" },
    { title: "চতুর্থ অধ্যায়: তড়িৎ রাসায়ন", link: "https://youtu.be/lJoeZDLsU64?si=uys63mcK8BDjk7KB" },
    { title: "পঞ্চম অধ্যায়: অর্থনৈতিক রসায়ন", link: "https://youtube.com/playlist?list=PLxSt9YDBipm5kTdyXvMk7HgRooRIFkg0j&si=fKNdEO8AcU8lD341" }
  ] },
  bio1: { name: "🧬 জীববিজ্ঞান ১ম পত্র", icon: "fas fa-dna", chapters: [
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
  ] },
  bio2: { name: "🧬 জীববিজ্ঞান ২য় পত্র", icon: "fas fa-dna", chapters: [
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
  ] },
  math1: { name: "📐 উচ্চতর গণিত ১ম পত্র", icon: "fas fa-square-root-alt", chapters: [
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
  ] },
  math2: { name: "📐 উচ্চতর গণিত ২য় পত্র", icon: "fas fa-square-root-alt", chapters: [
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
  ] },
  eng2: { name: "📖 ইংরেজি ২য় পত্র", icon: "fas fa-language", chapters: [
    { title: "Articles", link: "https://youtu.be/4n3SKm3FTms?si=sGMZD7YxzRw5mx-9" },
    { title: "Preposition", link: "https://www.youtube.com/watch?v=kTkKO-FJcx4&t=880s" },
    { title: "Clauses and Phrase", link: "https://youtu.be/iwo3-qJf5LA?si=D7mdvdNoljU4DnYY" },
    { title: "Right Forms of Verbs", link: "https://youtu.be/fxbq1WdmHP0?si=2twNokLp1N-sTsoN" },
    { title: "Changing Sentences", link: "https://youtube.com/playlist?list=PL7cXE6nk3Ep3_BLgrVF-JUrH4rt941mDV&si=WqF2TfJ-Uw5aytPb" },
    { title: "Narration", link: "https://youtube.com/playlist?list=PL7cXE6nk3Ep3KnvpaBglnYElX2LuNWeWQ&si=bfNT2oTIIIabJ5NC" },
    { title: "Pronoun Referencing", link: "https://youtu.be/TDbGisW4Kno?si=LbMhWIfia3z4CJYG" },
    { title: "Modifiers", link: "https://youtu.be/Zw3LF1LW40A?si=kH2zOr7CAov9rwpr" },
    { title: "Sentence Connectors", link: "https://youtu.be/Mn7C1XNgQkc?si=jGRHjECMdkrX-mE6" }
  ] },
  ict: { name: "💻 তথ্য ও যোগাযোগ প্রযুক্তি", icon: "fas fa-laptop-code", chapters: [
    { title: "অধ্যায় ২: কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং", link: "https://youtu.be/9kLNeT-MTNw?si=GDARZIJhhfMXQqtd" },
    { title: "অধ্যায় ৩: সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস", link: "https://youtube.com/playlist?list=PLxSt9YDBipm6RQTubQ2BAQVSgoRaHkLB6&si=e3Va6FmH26gUXiSx" },
    { title: "অধ্যায় ৪: ওয়েব ডিজাইন পরিচিতি এবং এইচটিএমএল", link: "https://youtube.com/playlist?list=PLJJqNbHzTfgY3KGPOV0Tow58UkhCZ4Myj&si=HrOPOh36hg0wdfKU" },
    { title: "অধ্যায় ৫: প্রোগ্রামিং ভাষা", link: "https://youtube.com/playlist?list=PLnZ9KY8JVTgqAQ9BMloGEQHu_99C3hfkn&si=mPFHPotjFZujhQH5" },
    { title: "অধ্যায় ৬: ডেটাবেস ম্যানেজমেন্ট সিস্টেম", link: "https://youtube.com/playlist?list=PLnZ9KY8JVTgr55B30QW0Bmr4UREZGz_wO&si=GKf8dwXNPxHqBIqc" }
  ] }
};

// ---------- Helper: YouTube embed fix (playlists, videos, shorts, live) ----------
function getYouTubeEmbedUrl(link) {
  if (!link) return "";
  if (link.includes("playlist?list=")) {
    const match = link.match(/[&?]list=([^&]+)/);
    if (match) return `https://www.youtube.com/embed/videoseries?list=${match[1]}`;
  }
  let videoId = null;
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/live\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/
  ];
  for (let pattern of patterns) {
    const match = link.match(pattern);
    if (match) { videoId = match[1]; break; }
  }
  if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  return link;
}

// DOM elements
const dashboardMain = document.getElementById('dashboardMain');
const contentArea = document.getElementById('contentArea');
const subjectsGrid = document.getElementById('subjectsGrid');
const globalProgressDiv = document.getElementById('globalProgress');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

let currentSubjectKey = null;

function updateProgressBar(subjectKey) {
  const data = subjects[subjectKey];
  if (!data) return;
  const total = data.chapters.length;
  const readArr = JSON.parse(localStorage.getItem(`read_${subjectKey}`)) || [];
  const percent = Math.round((readArr.length / total) * 100);
  progressBar.style.width = percent + "%";
  progressText.innerText = `📊 অগ্রগতি: ${percent}%`;
}

function toggleReadStatus(subjectKey, chapterIdx) {
  let readArr = JSON.parse(localStorage.getItem(`read_${subjectKey}`)) || [];
  if (readArr.includes(chapterIdx)) {
    readArr = readArr.filter(i => i !== chapterIdx);
    localStorage.setItem(`read_${subjectKey}`, JSON.stringify(readArr));
  } else {
    readArr.push(chapterIdx);
    localStorage.setItem(`read_${subjectKey}`, JSON.stringify(readArr));
  }
  if (currentSubjectKey === subjectKey) {
    renderTopicsList(subjectKey);
  }
  updateProgressBar(subjectKey);
}

function openVideo(subjectKey, chapterIdx, link, title) {
  history.pushState({ view: 'video', subjectKey, chapterIdx, link, title }, '');
  renderVideoScreen(subjectKey, chapterIdx, link, title);
}

function renderVideoScreen(subjectKey, chapterIdx, link, title) {
  dashboardMain.style.display = 'none';
  globalProgressDiv.style.display = 'block';
  updateProgressBar(subjectKey);
  const subject = subjects[subjectKey];
  const embedUrl = getYouTubeEmbedUrl(link);
  const allChapters = subject.chapters.map((ch, idx) => ({ title: ch.title, link: ch.link, idx }));
  
  let html = `<button class="back-btn" id="backBtnVideo"><i class="fas fa-arrow-left"></i> Back</button>
    <div class="video-learning-layout">
      <div class="video-main">
        <div id="dynamicPlayerArea"><div class="video-wrapper"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>
        <div class="pdf-actions"><button class="pdf-btn" id="backToTopicsBtn"><i class="fas fa-list-ul"></i> Back to Chapters</button></div>
      </div>
      <div class="playlist-side">
        <h4><i class="fas fa-list"></i> Playlist (All Chapters)</h4>
        <div id="playlistContainer" class="playlist-items"></div>
      </div>
    </div>`;
  contentArea.innerHTML = html;
  
  const playlistContainer = document.getElementById('playlistContainer');
  allChapters.forEach(ch => {
    const div = document.createElement('div');
    div.className = `playlist-video ${ch.idx == chapterIdx ? 'active' : ''}`;
    div.innerHTML = `<div class="video-meta"><h5>${escapeHtml(ch.title)}</h5></div>`;
    div.addEventListener('click', () => openVideo(subjectKey, ch.idx, ch.link, ch.title));
    playlistContainer.appendChild(div);
  });
  
  document.getElementById('backBtnVideo').addEventListener('click', () => history.back());
  document.getElementById('backToTopicsBtn').addEventListener('click', () => {
    history.pushState({ view: 'topics', subjectKey }, '');
    renderTopicsList(subjectKey);
  });
  setTimeout(() => {
    document.querySelector('.video-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function renderTopicsList(subjectKey) {
  const subject = subjects[subjectKey];
  if (!subject) return;
  currentSubjectKey = subjectKey;
  dashboardMain.style.display = 'none';
  globalProgressDiv.style.display = 'block';
  updateProgressBar(subjectKey);
  
  let topicsHtml = `<button class="back-btn" id="backBtnNav"><i class="fas fa-arrow-left"></i> Back to Subjects</button>
    <h2 style="margin-bottom: 20px;"><i class="${subject.icon}"></i> ${subject.name} · অধ্যায় সমূহ</h2>
    <div class="topics-list" id="topicsContainer">`;
  subject.chapters.forEach((ch, idx) => {
    const isRead = JSON.parse(localStorage.getItem(`read_${subjectKey}`))?.includes(idx) || false;
    topicsHtml += `<div class="topic-item" data-chapter-index="${idx}" data-chapter-link="${ch.link.replace(/"/g, '&quot;')}" data-chapter-title="${escapeHtml(ch.title)}">
      <i class="fas ${isRead ? 'fa-check-circle' : 'fa-play-circle'}"></i> ${ch.title}
      <span class="mark-read-badge" data-idx="${idx}" data-subj="${subjectKey}" style="margin-left:auto; cursor:pointer;"><i class="fas fa-bookmark"></i></span>
    </div>`;
  });
  topicsHtml += `</div>`;
  contentArea.innerHTML = topicsHtml;
  
  document.querySelectorAll('.topic-item').forEach(item => {
    const chapterIdx = item.getAttribute('data-chapter-index');
    const link = item.getAttribute('data-chapter-link');
    const title = item.getAttribute('data-chapter-title');
    item.addEventListener('click', (e) => {
      if (e.target.closest('.mark-read-badge')) return;
      openVideo(subjectKey, parseInt(chapterIdx), link, title);
    });
  });
  document.querySelectorAll('.mark-read-badge').forEach(badge => {
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      const subj = badge.getAttribute('data-subj');
      const idx = parseInt(badge.getAttribute('data-idx'));
      toggleReadStatus(subj, idx);
    });
  });
  const backBtn = document.getElementById('backBtnNav');
  if (backBtn) backBtn.addEventListener('click', () => history.back());
}

function renderDashboard() {
  dashboardMain.style.display = 'block';
  globalProgressDiv.style.display = 'none';
  contentArea.innerHTML = '';
  subjectsGrid.innerHTML = '';
  for (let [key, sub] of Object.entries(subjects)) {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.setAttribute('data-subj', key);
    card.innerHTML = `<i class="${sub.icon}"></i><h3>${sub.name}</h3><p>${sub.chapters.length} টি অধ্যায়</p>`;
    card.addEventListener('click', () => {
      history.pushState({ view: 'topics', subjectKey: key }, '');
      renderTopicsList(key);
    });
    subjectsGrid.appendChild(card);
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// Navigation with History API (Windows / Mobile back button works)
window.addEventListener('popstate', (event) => {
  const state = event.state;
  if (!state) { renderDashboard(); return; }
  if (state.view === 'topics' && state.subjectKey) {
    renderTopicsList(state.subjectKey);
  } else if (state.view === 'video' && state.subjectKey && state.link) {
    renderVideoScreen(state.subjectKey, state.chapterIdx, state.link, state.title);
  } else {
    renderDashboard();
  }
});

// Initialize
renderDashboard();
history.replaceState({ view: 'dashboard' }, '');
