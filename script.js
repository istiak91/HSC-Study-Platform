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
  //... rest of the subjects remain exactly the same
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
  subjects[key].chapters.forEach((ch, index) => {
    list.innerHTML += `
      <div class="chapter">
        <button onclick="openVideo('${ch.link}')">${ch.title}</button>
      </div>
    `;
  });
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
