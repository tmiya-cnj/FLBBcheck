//コメントをここに
if(document.getElementById("CustomerContactExt_field178").value==""){
    alert("工事前連絡先1が空欄です。")};

if(document.getElementById("CustomerContactExtField154").value==""){
    alert("新規品目が空欄です。")};

if(document.getElementById("CustomerContactExtField102").value==""){
    alert("コール地域が空欄です。")};

if(document.getElementById("CustomerContactExtField12").value==""){
    alert("事住欄が空欄です。")};

if(document.getElementById("CustomerContactExtField143").value!="0" & 
document.getElementById("CustomerContactExtField143").value!="" & 
document.getElementById("CustomerContactExt_field135").value==""){
    alert("電話番号2が空欄です。")};

if((document.getElementById("CustomerContactExtField12").value=="住宅用" & (
    document.getElementById("CustomerContactExtField232").value!="" | 
    document.getElementById("CustomerContactExtField233").value!="")) | (
document.getElementById("CustomerContactExtField12").value=="事務用" & 
document.getElementById("CustomerContactExtField229").value!="")){
    alert("付帯か事住欄を確認してください。")};

if(document.getElementById("CustomerContactExtField134").value!="する" & 
document.getElementById("CustomerContactExtField141").value!="する" & 
document.getElementById("CustomerContactExtField230").value=="獲得した"){
    alert("ひかり電話する番号かエースを確認ください。")};
    
if(document.getElementById("CustomerContactExtField153").value=="OSM" & 
(document.getElementById("CustomerContactExt_field156").value=="" | 
    document.getElementById("CustomerContactExt_field158").value=="" | 
    (document.getElementById("CustomerContactExt_field159").value=="" & 
        document.getElementById("CustomerContactExt_field160").value==""))){
    alert("OSM必須項目を確認ください。(OCNで正しく入力しているケースあり、その場合は無視ください)")};

if((document.getElementById("CustomerContactExtField12").value=="事務用" & 
    document.getElementById("CustomerContactExt_field145").value=="") | 
    (document.getElementById("CustomerContactExtField12").value=="住宅用" & 
        document.getElementById("CustomerContactExt_field145").value!="")){
    alert("事住欄と会社名の組み合わせ確認ください。")};

if(document.getElementById("CustomerContactExtField154").value!="ギガスマートファミリー" & 
document.getElementById("CustomerContactExtField154").value!="ギガスマートマンション" & 
document.getElementById("CustomerContactExtField134").value!="する" & 
document.getElementById("CustomerContactExtField141").value!="する" & 
document.getElementById("CustomerContactExtField121").value=="HGW設定"){
    alert("ALのみなのにHGW設定となっています。")};
