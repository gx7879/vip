import "./index.css";

const container = document.querySelector("#container");

const template = `<div class="flex flex-col rounded-md p-4 shadow-xl">
                    <a href="{{url}}" target="_blank">
                      <img
                        class="mb-3 h-[120px] w-[120px]"
                        src="{{img}}"
                        alt=""
                      />
                      <p>{{name}}</p>
                      <p>{{enName}}</p>
                    </a>
                  </div>`;

const data = [
  {
    url: "./src/assets/SUNNEW.apk",
    img: "./src/assets/sunshinetv.png",
    name: "晴天TV",
    enName: "SunshineTV",
  },
  {
    url: "./src/assets/smarttube_stable.apk",
    img: "./src/assets/smartyoutube.png",
    name: "SmartYoutube",
    enName: "smartyoutube",
  },
  {
    url: "./src/assets/mudvod-TVBOX-2.0.4-NOAD-NoUpdate-GDaily.org.apk",
    img: "./src/assets/nivod.png",
    name: "泥視頻",
    enName: "Nivod",
  },
];
let content = "";
for (let i = 0; i < data.length; i++) {
  content += template
    .replace("{{url}}", data[i].url)
    .replace("{{img}}", data[i].img)
    .replace("{{name}}", data[i].name)
    .replace("{{enName}}", data[i].enName);
}
container.insertAdjacentHTML("afterbegin", content);
