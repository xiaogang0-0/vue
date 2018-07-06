<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>
<template>
  <div class="layout" id="app">
	  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
	    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            导航 1
          </template>
    
          
          <MenuItem name="1-2">
        	  <router-link to="/nav">nav</router-link>	
          </MenuItem>
           <MenuItem name="1-2">
          	<router-link to="/nav1">nav1</router-link>	
          </MenuItem>
           <MenuItem name="1-2">
          	<router-link to="/nav2">nav2</router-link>	
          </MenuItem>
            
        </Submenu>
        <Submenu name="2">
	        <template slot="title">
            <Icon type="ios-keypad"></Icon>
            导航 2
	        </template>
	        <MenuItem name="2-1">Option 1</MenuItem>
	        <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
	        <template slot="title">
	          <Icon type="ios-analytics"></Icon>
	          导航 3
	        </template>
	        <MenuItem name="3-1">Option 1</MenuItem>
	        <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
	    </Menu>
	  </Sider>
	  <Layout :style="{marginLeft: '200px'}">
    	<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
    		<Row>
    	  	<Col span="4">
		        <Select sv-model="model4"  value="元课堂" size="small" style="width:100px">
			        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
				  </Col>
				  <Col span="20">
			      <Breadcrumb :style="{margin: '5px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
          </Col>
	   		</Row>
	      	
	    </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Card>
          <div style="min-height: 400px">
          	<router-view></router-view>
          </div>
        </Card>
      </Content>
	  </Layout>
  </div>
</template>
<script>
   export default {
      data () {
        return {
          cityList: [
            {
              value: '元课堂',
              label: '元课堂'
            },
            {
              value: '元校管',
              label: '元校管'
            },
            {
              value: '元易招',
              label: '元易招'
            },
            {
              value: '元测评',
              label: '元测评'
            }
          
          ],
          model2: '',
          model3: '',
          model4: '元课堂'
        }
      }
    }
</script>
