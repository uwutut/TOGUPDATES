const updates = [

{
    version: "8/5",
    date: "2026-07-31",
    type: "패치",
    title: "연 이랑 출시 및 패치",
    new: true,
    content: [
        {
            title: "신규 가주 연 이랑 출시",
            text: "패시브 - [영원의 불꽃] 효과가 발동하여 적군 전체에게 영구히 지속되는 화상을 입힙니다.<br>엑티브1 - [모든 것을 살리는 불꽃] 스킬로 아군의 모든 해로운 효과를 제거하고 체력을 회복과 무적 부여<br>엑티브2 - [모든 것을 태우는 불꽃] 스킬을 사용하여 모든 적군에게 강력한 대미지와 디버프를 부여하고 에너지까지 강탈하여 한순간에 대량의 에너지를 수급할 수 있습니다.<br>궁극기 -  [불꽃의 주인]전장 중앙에 강림하여 적의 체력 회복을 차단하고 강력한 체력 비례 대미지를 입힌다.",
            images:["images/연이랑_1.gif"]
        },
        {
            title: "8/5 (수) 적용 사항",
            text: "타워 마블 이벤트 개편:주사위 가치 2배, 보상 2배 상향  무료 주사위 획득량 50% 감소로 동일 기대값 유지 및 피로도 절반 압축<br>오등분의 복권 이벤트: 시동무기 영혼 강화에 집중하실 수 있도록 '마스터키' 류 획득에 초점을 맞췄습니다.<br>공방 스토어(보석상) 교환 효율 상향: 레볼루션 재화 및 시동무기 영혼 강화의 접근성을 높이기 위해 획득량과 교환 횟수를 대폭 상향.",
            images:["images/보석상.png","images/보석상2.png"]
        },
        {
            title: "8/19 (수) 적용 사항",
            text: "시동무기 분해소 개선 :강화가 진행된 시동무기의 분해 기능이 추가 됩니다.<br>노랑이의 렛츠 빙고 타임: 최종 보상을 주혼의 구슬 3,000개에서 영혼 주사위 30개로 변경."
        },
        {
            title: "레볼루션 추가 성장",
            text: "해금 조건: 태생 SSR+ 등급, 가주급 동료로 모든 레볼루션 노드 강화를 완료한 캐릭터에 한해 개방됩니다.(※태생 SSR, XSR+, SR, R 등급 대상 제외)<br>성장 방식: 총 3개의 스탯 항목(관통/저항, 명중/회피, 효과 적중/효과 저항 등)을 선택하여 각 최대 10레벨까지 강화 가능.",
            images:["images/레볼.png"]
        },
        {
            title:"새로운 부유선 ‘레드 데스’ 사전 안내",
            text:"전투 시작 시 모든 아군이 녹 속성 적군에게 주는 대미지를 증가 시키고, 모든 적군의 적 속성 저항률을 감소시켜 속성을 증폭 시키는 역할을 수행해 줄 것입니다.",
            images:["images/부유선.png"]
        },
        {
            title: "[13월의 무기] 하 유리",
            text:"<strong>보스전 및 PVE 특화 핵심 딜러<strong><br>전투 스타일: '두 자루 13월의 주인'이라는 매력적인 설정에 맞춰, 검은 삼월과 초록 사월을 교체해 가며 전투한다.<br>궁극기: 무기를 교체할 때마다 고유한 '폭주' 중첩(스택)이 쌓이게 됩니다. 이후 필살기인 [13월의 폭주]를 사용하면, 누적된 중첩에 비례하여 적에게 피해를 입힌다.",
            images:["images/크유리.gif"]
        },
        {
            title: "건의 사항 답변",
            text: "Q. 시동무기의 잠금, 검색, 옵션 관리 편의를 개선해 주세요.<br>A. 추가 안 할 계획이지만 UI 개선은 해주겠다.<br><br>Q. 시동무기 영혼 강화의 실패 부담과 재화 부족을 완화해 주세요.<br>A. 천장 도입은 안 해줄 것이지만 '마스터키' 공급량과 결정체 교환소의 교환 횟수를 대폭 늘려주겠다.<br><br>Q. 코어 요구치 때문에 막히는 콘텐츠의 난이도를 완화해 주세요.<br>A. 포트는 4~7만 완화 해주겠다. 인페는 이미 수정 완료.<br><br>Q. 성장 시스템의 너무 빠른 추가와 완성 비용을 낮춰 주세요.<br>A. 지속적으로 추가 공급을 늘려 꾸준히 성장하실 수 있는 환경을 만들겠습니다. 추가 성장의 출시 빈도는 좀 더 적절하게 조정할 수 있도록 노력하겠다.<br><br>Q. 코어, 기원, 레볼루션 성장 재화의 수급처를 늘려 주세요.<br>A. 다른곳에서 늘릴 계획은 없고 8/5 공방 스토어 교환량 확대를 통해 앞으로도 꾸준히 재화 공급을 지원하겠다.<br><br>Q. 신규 캐릭터 전투 메커니즘을 미리 시험할 환경을 제공해 주세요(일모는 너무 쉬워 인페 오픈까지 기다려야 하는 문제).<br>A. 기존 콘텐츠의 패턴을 급하게 바꾸기보다는, 새로운 즐길 거리이자 캐릭터 시험의 장이 될 수 있는 신규 콘텐츠를 별도로 준비하여 9월 중순에 선보이겠다.<br><br>Q. 부유선 소환의 확정성(천장)과 성장 재화 수급을 개선해 주세요.<br>A. '부유선 제작 교환소’에 [부유선] 전설 제작도 선택 상자를 추가하는 한편, 붉은 부유석을 사용해 부유선을 확정적으로 선택해 획득할 수 있게 만들겠다.<br><br>Q. PVP 매칭 조와 이벤트 시작 배치를 합리적으로 해주세요.<br>A. 9월 중순을 목표로 패치를 위해 노력중이다.<br><br>Q. 신규/기존 캐릭터 밸런스 개선해 주세요.<br>A. 켈헬람은 8월 중순, 리랼은 9월 중순에 상향<br><br>Q. 가주 복각 주기를 좀 더 자주 진행해 주세요.<br>A. 8/19 - 가드안, 9/2 - 트메",
            images:["images/18.png"]
        }
    ]
},

{
    version: "7/22",
    date: "2026-07-22",
    type: "패치",
    title: "시랼 출시 및 업데이트 내용",
    new: false,
    content: [
        {
            title: "콘텐츠 확장",
            text: "[일반] 모험 확장 (346F ~ 350F)<br>월요일 [인페르노] 모험 확장 (346F ~ 350F)<br>하드 모험 스테이지 점프 기능 추가<br>혼돈의 시련, 속성시련 시련 확장 (No. 2150)"
        },
        {
            title: "이벤트",
            text: "[3주년] 논스톱 SSR+ 한계돌파 소환 (마고까지)<br>하진성의 FUG 모집<br>참참참 이벤트<br>성장 교환 (넨 네야까지)<br>연합 함대전 시즌 10<br>연합 협동 미션<br>진검승부 시즌 9<br>타워 레이스"
        },
        {
            title: "의상",
            text: "신규 의상 등장 ( [붉은 등불] 시랼, [갯뱀의 자손] 리랼)<br>복각 의상 등장 ( [FUG의 간부] 하유라)"
        },
        {
            title: "기타 내용",
            text: "[가시] 비올레 - 레볼루션 스킬 밸런스 조정 (버프)<br>랭커 레이스 입장 조건 변경 및 보상 변경<br>  ➔ [인페르노]완등 시 입장 가능<br>"
        },
        {
            title:"시랼 스킬셋",
            text:"궁극기 화무십일홍 - 가장 멀리 있는 적군 뒤로 순간이동한 뒤 부채를 휘둘러 때린 후 넉백시킨다(스킬 사용 중 상태이상 면역).<br>액티브 비선영수 - 가장 멀리 있는 적군에게 부채를 던져 경로상 적군에게 대미지를 입힌 뒤 대상 후방으로 순간이동하며 부채를 휘둘러 대미지를 입히며 넉백시킨다(스킬 사용 중 상태이상 면역).<br>액티브 몽환향 - 연기를 일으켜 범위 내 적군의 명중과 회피를 감소시킴. 추가로 연기가 지속되는 동안 자신은 은신하며 매초마다 에너지를 회복한다.<br>패시브 - 자신의 스킬 공격이 적중한 적군을 출혈시켜 매초 공격력 N%의 대미지와 대상 최대 체력 N%의 대미지를 입힌다. (중첩 제한 없음) 전장에 출혈된 적군이 N명 이상 있다면 적군의 공격을 무조건 회피한다.",
            images:["images/16.png"]
        },
        {
            title: "레볼루션 능력",
            text:"4단계: [몽환향] 스킬이 강화되어 연기가 지속되는 동안 공격력, 급속이 증가하고 매초마다 자신의 액티브 쿨타임이 감소한다. <br>5단계: [소중유검] 스킬이 강화되어 전투 시작 시 가장 멀리 있는 적군 N명에게 출혈 디버프를 건다. 추가로 출혈 상태의 적군에게 대미지를 입힐 때마다 공격력이 증가한다. (최대 N중첩) 자신이 출혈 시킨 적군의 체력 회복을 차단한다.",
            images:["images/17.png"]
        },
        {
            title: "시동무기 능력",
            text: "LV 1 - [비선영수] 스킬 사용 시 마법 관통률이 증가한다.<br>LV 2 - [몽환향] 스킬이 강화되어 연기 안에 있는 적군의 방어력을 감소시킨다.<br>LV 3 - [몽환향] 스킬이 강화되어 연기 안에 있는 적군의 마법 저항률을 감소시킨다.<br> LV 4 - [몽환향] 스킬이 강화되어 연기 안에 있는 적군의 급속을 감소시킨다. ",
            images:["images/18.png"]
        }
    ]
},

{
version:"7/20",
date:"2026-07-20",
type:"패치",
new:false,
title:"라이브 방송",

content:[
    {
        title:"쿠폰",
        text:"TOG3YRFESTA - 성장 재화 선택상자 6H * 1000<br> 3YRTOGETHER - 마스터키 1000개<br>THANKUAD3YR - 빛레볼 1만개 <br>TOG3YRGIFT - 초록레볼 2천개<br>SHLTOG3YR - 전설 부유선 제작도 1개<br>TOG3YRUPDATE - 빛레볼 1만개<br>TOGPDGIFT - 자유의 교범서 20개<br> TOGLOVEU - 마스터키 1천개<br> TOGNEWCOS - SRR+ 탑의 축복 돌파석 60개<br> TOG3YRNEW - 암티 100장<br>TOG3YRTHANKU - 기원티켓 50장"
    
    },
    {
        title:"일정",
        text:"앞으로 이벤트에 관한 일정 설명입니다.",
        images:["images/1.png"]
    },
    {
        title:"이벤트",
        text:"논스톱 이벤트(마고까지)<br><br>성장교환(넨네야까지) + 레볼루션 초기화 티켓<br><br>스승과 제자 이벤트 시작",
        images:["images/2.jpg", 
                "images/3.png",
                "images/4.png",
                "images/5.png"]
    },
{
    title:"신규 동료 - 시랼",
    text:"전투 시작 후 가장 멀리 있는 적군에게 출혈 디버프 부여<br><br>패시브 - 적군 출혈 버프가 있으면 반드시 회피 부여<br><br>액티브1 - 적군 명중·회피 감소 및 본인 은신 + 에너지 회복<br><br>엑티브2 -  멀리 잇는 적에게 부채를 날려 순간이동 후 대상을 넉백(모든 스킬공격에 출혈효과)궁 - 가장 멀리잇는 적군에게 이동 후 넉백 및 중앙으로 모으기<br><br>출혈딜 - 체퍼뎀",
    
    images:[
        "images/6.png"
    ]
},

{
        title:"신규 가주",
        text:"신규 가주 연 이랑입니다.",
        images:["images/7.png"]
},
{
        title:"가시 비올레 버프",
        text:"7/22부터 적용입니다.",
        images:["images/8.png"]
},
{
        title:"PC클라이언트 제작중",
        text:"보안상 이유 때문에 접속 할때마다 로그인 필요.",
        images:["images/9.png"]
},
{
        title:"7/22 업데이트",
        text:"편의성, 랭커 레이스 조건 개편<br><br>연합 합동 미션에 빛레볼, 교범서 배정<br><br>콜로세움 아레나에 마스터키, 시동 주사위 배정",
        images:["images/10.png", "images/11.png"]
},
{
        title:"8/5 업데이트",
        text:"풀노드 해야지 이용 가능<br><br> 관통/저항, 명중/회피, 효적/효저 추가 강화 가능",
        images:["images/12.png"]
},
{
        title:"8/19 업데이트",
        text:"녹장어 추가",
        images:["images/13.png"]
},
{
        title:"9/2 업데이트",
        text:"트메 복각 + 버프(개구리 딜, 생존력 증가)<br><br>신규 부유선 및 시동무기 개발중",
        images:["images/14.png"]
},
{
        title:"사전 QNA 답변",
        text:"3주년 업데이트부터 지게나 보스 딜 안 들어가는 구간 완화 + 보상 획득량 상향<br><br>기가보스 참여도 비중 완화 및 보상 상향<br><br>레볼 및 코어 상시 초기화는 도입 X <br><br>인페르노 및 밥솥 코어 완화<br><br>코어 통합 안해줄거임<br><br>밥솥에 자동 재도전 구현 안 할 계획<br><br>가주 기원 좀 더 자주 할 계획<br><br>SSR 기원은 추가할 예정X<br><br>태생의 보주 교범서 획득처 증가시킬 계획<br><br>강화된 시무 분해기능 추가 예정(8/19)<br><br>신규 시동무기 추기(9/30)<br><br>부유선 천장 시스템 도입은 하지 않을 것이지만, 부유선 '확정 상자' 추가 예정<br><br> 켈헬람, 리랼 버프 예정<br><br>점령전 구조 및 보상 개편, 오락실 보상 상향<br><br>인페르노 관리자 수 낮추고 보상 압축 기획 중<br><br>고급 결정체로 마스터키, 레볼루션 재화 교환 추가<br><br>발판 버프? 하는듯<br><br>연합 꾸미기 추가<br><br>상태이상 버프, 디버프 가시성 상향<br><br>코어가 전투력 표기에 더 잘 반영되도록 패치",
},
],


}

];

const list=document.getElementById("list");

function draw(){

list.innerHTML="";

const keyword=document
.getElementById("search")
.value
.toLowerCase();

const filter=document
.getElementById("filter")
.value;

updates.forEach(update=>{

const text=
JSON.stringify(update).toLowerCase();

if(!text.includes(keyword)) return;

if(filter!="전체"&&filter!=update.type) return;

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<div class="head">

<div class="left">

<div class="version">${update.version}</div>

<div>${update.title}</div>

<div class="date">${update.date}</div>

<div class="type">${update.type}</div>

${update.new?'<div class="badge">NEW</div>':""}

</div>

<div>▼</div>

</div>


<div class="content">

${update.content.map(item => `
    <div class="update-section">

        <h3>${item.title}</h3>

        <p>${item.text}</p>

        ${
            item.images
            ? item.images.map(img =>
                `<img src="${img}" class="update-image">`
              ).join("")
            : ""
        }

    </div>
`).join("")}

`;

card.querySelector(".head").onclick=()=>{

const c=card.querySelector(".content");

c.style.display=
c.style.display=="block"
?"none":"block";

};

list.appendChild(card);

});



}

draw();

search.oninput=draw;

filter.onchange=draw;