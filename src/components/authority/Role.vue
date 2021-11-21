<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="10">
                <el-card>
                    <el-form ref="form" :model="form" label-width="80px" size="mini">
                        <el-form-item label="活动名称">
                            <el-col :span="8">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-col :span="15">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="即时配送">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="活动性质">
                            <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="特殊资源">
                            <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <el-form :inline="true" :model="temp" label-position="left" label-width="70px" size="mini">
						<el-form-item label="楼号" prop="buildnum">
							<el-select v-model="temp.buildnum" class="filter-item" placeholder="Please select">
								<el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
							</el-select>
						</el-form-item>
						<el-form-item label="房屋座落" prop="housenumber">
							<el-input v-model="temp.housenumber" />
						</el-form-item>
						<el-form-item label="产别" prop="category">
							<el-input v-model="temp.category" />
						</el-form-item>
						<el-form-item label="房屋产权单位" prop="propertyunit">
							<el-input v-model="temp.propertyunit" />
						</el-form-item>
						<el-form-item label="居住人" prop="people">
							<el-input v-model="temp.people" />
						</el-form-item>
						<el-form-item label="身份证号" prop="idcard">
							<el-input v-model="temp.idcard" />
						</el-form-item>
						<el-form-item label="出生日期" prop="birthdate">
							<el-input v-model="temp.birthdate" />
						</el-form-item>
						<el-form-item label="联系电话" prop="phone">
							<el-input v-model="temp.phone" />
						</el-form-item>
						<el-form-item label="工作单位" prop="wordunit">
							<el-input v-model="temp.wordunit" />
						</el-form-item>
						<el-form-item label="房屋分配单位" prop="allocationunit">
							<el-input v-model="temp.allocationunit" />
						</el-form-item>
						<el-form-item label="产权证明名称" prop="proofname">
							<el-input v-model="temp.proofname" />
						</el-form-item>
						<el-form-item label="产权证号" prop="propertycard">
							<el-input v-model="temp.propertycard" />
						</el-form-item>
						<el-form-item label="租赁证号" prop="leasecard">
							<el-input v-model="temp.leasecard" />
						</el-form-item>
						<el-form-item label="房屋情况" prop="homecondition">
							<el-input v-model="temp.homecondition" />
						</el-form-item>
						<el-form-item label="居室" prop="bedroom">
							<el-input v-model="temp.bedroom" />
						</el-form-item>
						<el-form-item label="间数" prop="rooms">
							<el-input v-model="temp.rooms" />
						</el-form-item>
						<el-form-item label="合住户数" prop="sharenums">
							<el-input v-model="temp.sharenums" />
						</el-form-item>
						<el-form-item label="证载建筑面积" prop="bulidarea">
							<el-input v-model="temp.bulidarea" />
						</el-form-item>
						<el-form-item label="证载使用面积" prop="usearea">
							<el-input v-model="temp.usearea" />
						</el-form-item>
						<el-form-item label="自建房屋面积" prop="selfbuildarea">
							<el-input v-model="temp.selfbuildarea" />
						</el-form-item>
						<el-form-item label="自住出租" prop="rent">
							<el-input v-model="temp.rent" />
						</el-form-item>
						<el-form-item label="意愿调查" prop="willsurvey">
							<el-input v-model="temp.willsurvey" />
						</el-form-item>
					</el-form>
                </el-card>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            //数据编辑管理
			temp: {
				id: undefined,
				buildnum: undefined,  //楼号
				housenumber: undefined,	//房屋座落
				category:undefined,  //产别
				propertyunit:undefined,  //房屋产权单位
				people:undefined,  //居住人
				idcard:undefined,  //身份证号
				birthdate:undefined,  //出生日期
				phone:undefined,  //联系电话
				wordunit:undefined,  //工作单位
				allocationunit:undefined,  //房屋分配单位
				proofname:undefined,  //产权证明名称
				propertycard:undefined,  //产权证号
				leasecard:undefined,  //租赁证号
				homecondition:undefined,  //房屋情况
				bedroom:undefined,  //居室
				rooms:undefined,  //间数
				sharenums:undefined,  //合住户数
				bulidarea:undefined,  //证载建筑面积
				usearea:undefined,   //证载使用面积
				selfbuildarea:undefined,  //自建房屋面积
				rent:undefined,  //自住出租
				willsurvey:undefined,  //意愿调查
			},
        }
    }
}
</script>

<style lang="less" scoped>
    .el-card{
        margin-bottom: 10px;
    }
</style>