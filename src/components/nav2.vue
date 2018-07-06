<template>
  
  <div class="hello">
    <!-- <Affix :offset-bottom="80">
      <span class="demo-affix">图钉</span>
    </Affix> -->
   


    <div class="ll-title">Router2</div>

    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Icon type="arrow-up-b"></Icon>


    <Rate v-model="value" disabled></Rate>

    <Rate allow-half v-model="valueHalf"></Rate>

    <Row >
      <Col span="12">
          <Rate show-text v-model="valueText"></Rate>
      </Col>
      <Col span="12">
          <Rate show-text allow-half v-model="valueCustomText">
              <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
      </Col>
    </Row>

    <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>


    <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop>

    <Row>

    <Col class="demo-spin-col" span="24">
        <Spin fix>
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>正在努力加载......</div>
        </Spin>
    </Col>

    </Row>

        




    


  </div>
  
</template>

<script>
export default {
  name: 'nav2',
  data () {
    return {
      msg: '数据',
      value: 2,
      valueHalf: 2.5,
      valueCustomText: 3.8
    }
  }
}
</script>

<style scoped>

</style>


<style>
  
   .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>