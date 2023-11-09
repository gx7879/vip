import "./index.css";

function getapkUrl(name) {
  return new URL(`/src/assets/${name}.apk`, import.meta.url).href;
}

function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href;
}

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
    url: "SUNNEW",
    img: "sunshinetv",
    name: "晴天TV",
    enName: "SunshineTV",
  },
  {
    url: "smarttube_stable",
    img: "smartyoutube",
    name: "SmartYoutube",
    enName: "smartyoutube",
  },
  {
    url: "mudvod-TVBOX-2.0.4-NOAD-NoUpdate-GDaily.org",
    img: "nivod",
    name: "泥視頻",
    enName: "Nivod",
  },
];
let content = "";
for (let i = 0; i < data.length; i++) {
  content += template
    .replace("{{url}}", getapkUrl(data[i].url))
    .replace("{{img}}", getImageUrl(data[i].img))
    .replace("{{name}}", data[i].name)
    .replace("{{enName}}", data[i].enName);
}
container.insertAdjacentHTML("afterbegin", content);
