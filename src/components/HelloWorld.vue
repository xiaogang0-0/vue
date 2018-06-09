<template>

  <div class="hello">
    <div class="ll-body">
      <div class="ll-heading">
        <div class="ll-title">第02讲_全等三角形</div>
      </div> 
      

      <div class="mm-container">
        <div class="mm-panel" id="mm_1_1">
          <div class="mm-heading">
            <i class="iconfont icon-node1"></i>知识图谱
          </div>
          <div class="mm-body">
            <div id="jsmind_container" class="jsmind_container">
              <div class="jsmind-inner" style="width: 714px; height: 570px;">
              <canvas width="714" height="570"></canvas>
                <jmnodes class="theme-primary" style="width: 714px; height: 570px;"><jmexpander nodeid="71" style="visibility: visible; left: 350px; top: 82px;">-</jmexpander><jmnode nodeid="71" style="visibility: visible; left: 274px; top: 74.5px;">全等三角形</jmnode><jmexpander nodeid="72" style="visibility: visible; left: 386px; top: 253.5px;">-</jmexpander><jmnode nodeid="72" style="visibility: visible; left: 274px; top: 246px;">全等三角形的判定</jmnode><jmexpander nodeid="492" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="492" style="visibility: visible; left: 393px; top: 50px;">全等图形</jmnode><jmexpander nodeid="493" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="493" style="visibility: visible; left: 393px; top: 99px;">全等三角形的性质</jmnode><jmexpander nodeid="495" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="495" style="visibility: visible; left: 429px; top: 148px;">SSS</jmnode><jmexpander nodeid="496" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="496" style="visibility: visible; left: 429px; top: 197px;">SAS</jmnode><jmexpander nodeid="497" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="497" style="visibility: visible; left: 429px; top: 246px;">ASA</jmnode><jmexpander nodeid="498" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="498" style="visibility: visible; left: 429px; top: 295px;">AAS</jmnode><jmexpander nodeid="499" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="499" style="visibility: visible; left: 429px; top: 344px;">HL</jmnode><jmexpander nodeid="11292" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="11292" style="visibility: visible; left: 274px; top: 491px;">直角三角形的性质及全等的判定</jmnode><jmexpander nodeid="11321" style="visibility: visible; left: 422px; top: 425px;">-</jmexpander><jmnode nodeid="11321" style="visibility: visible; left: 274px; top: 417.5px;">全等三角形的作图及应用</jmnode><jmexpander nodeid="31689" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="31689" style="visibility: visible; left: 465px; top: 393px;">用尺规作三角形</jmnode><jmexpander nodeid="31690" style="visibility: hidden; display: none;">-</jmexpander><jmnode nodeid="31690" style="visibility: visible; left: 465px; top: 442px;">利用三角形全等测距离</jmnode><jmnode class="root" nodeid="root" style="visibility: visible; left: 100px; top: 269.5px;">第02讲_全等三角形</jmnode></jmnodes>
              </div>
            </div>
            <div>
              内容部分渲染
              <P>渲染内容失败 数据请求错误</P>
              <span>错误类型<em>200</em></span>
              <h3>模板加载</h3>
              <p>1.公式模板</p>
              <p>2.注释模板</p>
              
            </div>
          </div>
        </div>
      </div>



    </div>
    


  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '数据'
    }
  }
}
</script>

<style scoped>
.ll-title:hover {
    border-color: #518df1;
}
.ll-title {
    padding: 10px;
    font-weight: 700;
    font-size: 26px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #fff;
    transition: border-color 0.3s;
}



.ll-heading {
    padding: 20px 0 15px;
}
.mm-panel {
    position: relative;
}
.mm-heading {
    position: relative;
    padding: 10px 0 10px 30px;
    margin: 10px 0;
    color: #518df1;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
}
.mm-body {
    position: relative;
    padding: 0 40px;
}
.adddd {
  padding-bottom: 200px;
  margin-top: 200px;
  background: #ddd;
  width: 100px;
  height:100px;
}


.jsmind-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

canvas {
    position: absolute;
    z-index: 1;
}

jmnodes {
    position: absolute;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);
}

jmexpander {
    border-color: gray;
}
jmexpander {
    position: absolute;
    width: 11px;
    height: 11px;
    display: block;
    overflow: hidden;
    line-height: 8px;
    font-size: 12px;
    text-align: center;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
}

</style>

<style>




  body {
    font-family: 微软雅黑, "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #ecf1f7;

    padding:0;
    margin:0;
  }
  .ll-body {
    width: 980px;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: #fff;
  }
  .ll-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
  }

  * {
    box-sizing: border-box;
  }
</style>
