//BlueBeanの入力判定

//変えた色のリセット
document.getElementById("CustomerContactExtField12").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField102").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field107").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field108").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field109").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field111").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField121").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField134").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field135").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField141").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field145").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field152").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField153").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField154").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField155").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field156").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field158").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field159").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field160").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field178").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField180").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField229").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField230").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField232").style.removeProperty("background-color");
document.getElementById("CustomerContactExtField233").style.removeProperty("background-color");
document.getElementById("CustomerContactExt_field271").style.removeProperty("background-color");

//住所の入力漏れチェック
if(document.getElementById("CustomerContactExt_field107").value==""){
    document.getElementById("CustomerContactExt_field107").style.backgroundColor="pink";
    alert("住所が空欄です。");
};

if(document.getElementById("CustomerContactExt_field108").value==""){
    document.getElementById("CustomerContactExt_field108").style.backgroundColor="pink";
    alert("住所カナが空欄です。");
};

//申込電番チェック
if(document.getElementById("CustomerContactExtField25").value!=""){
    var sonota_obj = document.getElementById("CustomerContactExtField25").value;
    var mousiTelNo_obj = document.getElementById("CustomerContactExt_field111").value;
    if(sonota_obj.indexOf(mousiTelNo_obj)==-1){
        document.getElementById("CustomerContactExt_field111").style.backgroundColor="khaki";
        alert("確認：その他情報にない電番が申込電番に入力されています。");
    }
};

//FAX番号チェック
if(document.getElementById("CustomerContactExt_field109")==""){
    document.getElementById("CustomerContactExt_field109").style.backgroundColor="pink";
    alert("FAX番号が空欄です。（無い場合は無し）");
};

//間柄チェック
var BBC_Aidagara_obj = "本人代表者配偶者";
var Aidagara_obj = document.getElementById("CustomerContactExtField180").value;
if(Aidagara_obj==""){
    document.getElementById("CustomerContactExtField180").style.backgroundColor="pink";
    alert("間柄を入力してください。");
}else if(BBC_Aidagara_obj.indexOf(Aidagara_obj)==-1 && document.getElementById("CustomerContactExt_field271").value==""){
    document.getElementById("CustomerContactExt_field271").style.backgroundColor="pink";
    alert("間柄詳細を確認してください。");
};

//マンションタイプの際のプラン
if(document.getElementById("CustomerContactExtField154").value==""){
    document.getElementById("CustomerContactExtField154").style.backgroundColor="pink";
    alert("新規品目が空欄です。");
}else{
    var hinmoku_obj = document.getElementById("CustomerContactExtField154").value;
    if(hinmoku_obj.indexOf("マンション")>0 &
    document.getElementById("CustomerContactExtField155").value==""){
        document.getElementById("CustomerContactExtField155").style.backgroundColor="pink";
        alert("マンションのプランを選択してください。");
    }
};

if(document.getElementById("CustomerContactExt_field178").value==""){
    document.getElementById("CustomerContactExt_field178").style.backgroundColor="pink";
    alert("工事前連絡先1が空欄です。");
};


if(document.getElementById("CustomerContactExtField102").value==""){
    document.getElementById("CustomerContactExtField102").style.backgroundColor="pink";
    alert("コール地域が空欄です。");
};

if(document.getElementById("CustomerContactExtField12").value==""){
    document.getElementById("CustomerContactExtField12").style.backgroundColor="pink";
    alert("事住欄が空欄です。");
};

if(document.getElementById("CustomerContactExtField143").value!="0" & 
document.getElementById("CustomerContactExtField143").value!="" & 
document.getElementById("CustomerContactExt_field135").value==""){
    document.getElementById("CustomerContactExt_field135").style.backgroundColor="pink";
    alert("電話番号2が空欄です。");
};

if(document.getElementById("CustomerContactExtField12").value=="住宅用" & (
    document.getElementById("CustomerContactExtField232").value!="" | 
    document.getElementById("CustomerContactExtField233").value!="")){
    document.getElementById("CustomerContactExtField12").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExtField232").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExtField233").style.backgroundColor="khaki";
    alert("付帯か事住欄を確認してください。");
}else if(document.getElementById("CustomerContactExtField12").value=="事務用" & 
document.getElementById("CustomerContactExtField229").value!=""){
    document.getElementById("CustomerContactExtField12").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExtField229").style.backgroundColor="khaki";
    alert("付帯か事住欄を確認してください。");
};

if(document.getElementById("CustomerContactExtField134").value!="する" & 
document.getElementById("CustomerContactExtField141").value!="する" & 
document.getElementById("CustomerContactExtField230").value=="獲得した"){
    document.getElementById("CustomerContactExtField134").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExtField141").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExtField230").style.backgroundColor="khaki";
    alert("ひかり電話する番号かエースを確認ください。");
};
    
if(document.getElementById("CustomerContactExtField153").value=="OSM" & 
(document.getElementById("CustomerContactExt_field156").value=="" | 
    document.getElementById("CustomerContactExt_field158").value=="" | 
    (document.getElementById("CustomerContactExt_field159").value=="" & 
        document.getElementById("CustomerContactExt_field160").value==""))){
    document.getElementById("CustomerContactExtField153").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExt_field156").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExt_field158").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExt_field159").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExt_field160").style.backgroundColor="khaki";
    alert("OSM必須項目を確認ください。(OCNで正しく入力しているケースあり、その場合は無視ください)");
};

if(document.getElementById("CustomerContactExtField153").value=="OSM"){
    var ispReg = new RegExp(/nifty$|^asahi|excite$|^biglobe$|^dti$|^hi-?ho$|^ocn$|^plala$|^so-?net$|^wakwak$|^ぷらら$|ニフティ$|^アサヒネット$|エキサイト$|^ビッグローブ$|^ハイホー$|^ソネット$|^ワクワク$/,'i');
    var inputIsp = document.getElementById("CustomerContactExt_field152").value;
    if(ispReg.test(inputIsp)===false){
        document.getElementById("CustomerContactExt_field152").style.backgroundColor="khaki";
        alert("ISP名を確認ください");
    }
}

if((document.getElementById("CustomerContactExtField12").value=="事務用" & 
    document.getElementById("CustomerContactExt_field145").value=="") | 
    (document.getElementById("CustomerContactExtField12").value=="住宅用" & 
    document.getElementById("CustomerContactExt_field145").value!="")){
    document.getElementById("CustomerContactExtField12").style.backgroundColor="khaki";
    document.getElementById("CustomerContactExt_field145").style.backgroundColor="khaki";
    alert("事住欄と会社名の組み合わせ確認ください。");
};

if(document.getElementById("CustomerContactExtField154").value!="ギガスマートファミリー" & 
document.getElementById("CustomerContactExtField154").value!="ギガスマートマンション" & 
document.getElementById("CustomerContactExtField134").value!="する" & 
document.getElementById("CustomerContactExtField141").value!="する" & 
document.getElementById("CustomerContactExtField121").value=="HGW設定"){
    document.getElementById("CustomerContactExtField121").style.backgroundColor="khaki";
    alert("ALのみなのにHGW設定となっています。");
};
