<template>

  <div class="hello">
    <div class="ll-body">
      <div class="ll-heading">
        <div class="ll-title">ren</div>
      </div> 

      <div class="mm-container">
        <div class="mm-panel" id="mm_1_1">
          <div class="mm-heading">
            <i class="iconfont icon-node1"></i>知识图谱
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
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
