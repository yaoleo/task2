/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};

/**
 * �ж������Ƿ����
 */
function isPlace(city){
    var re = /^[\u4E00-\u9FA5a-zA-Z]+$/;//������re

    return re.test(city);
}
function isNum(num){
    var re = /^[0-9]+(?!\.)$/;//����re

    return re.test(num);
}

/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input');
    var num = document.getElementById('aqi-value-input');
    if(isPlace(city.value)){
        if(isNum(num.value)){
            aqiData[city.value]=num.value;
        }
        else{
            alert("��������������һ��������");
        }
    }
    else{
        alert("������ֻ�������Ļ���Ӣ����ĸ��");
    }
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {

    var table=document.getElementById('aqi-table');
    var thead=document.createElement("thead");//��ӱ�ͷ
    var thead_tr = document.createElement("tr");
    for (var i = 0;i<3;i++){
        thead_tr.appendChild(document.createElement("td"));
    }
    thead_tr.childNodes[0].textContent="����";
    thead_tr.childNodes[1].textContent="��������";
    thead_tr.childNodes[2].textContent="����";
    thead.appendChild(thead_tr);

    var tbody = document.createElement("tbody");//���tbody
    for(city in aqiData){
        var tr = document.createElement("tr");
        for (var i = 0;i<3;i++){
            tr.appendChild(document.createElement("td"));
        }
        tr.childNodes[0].textContent=city;
        tr.childNodes[1].textContent=aqiData[city];
        tr.childNodes[2].innerHTML="<button>ɾ��</button>";
        tbody.insertBefore(tr,tbody.childNodes[0]);//��ǰ����
    }
    table.replaceChild(thead,table.childNodes[0]);//��ͷ����
    table.replaceChild(tbody,table.childNodes[1]);//����tbody

}


/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle(target) {
    // do sth.
    var key =target.parentNode.previousSibling.previousSibling.childNodes[0].textContent;
    delete aqiData[key];
    renderAqiList();
}

function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����

    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
    window.onload=function(){
        var add_btn=document.getElementById('add-btn');
        add_btn.onclick = function (){
            addBtnHandle();//��Ӽ�¼
        }
        var table=document.getElementById('aqi-table');
        table.onclick=function(event){//�¼�ί����ӵ���¼�
            var event = event||window.event;
            var target = event.target||event.srcElement;
            if(target.nodeName=="BUTTON"){
                delBtnHandle(target);
            }
        };
    }

}

init();