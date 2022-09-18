<template>
  <div>
    <table border="1">
      <tr>
        <th>字段名称</th>
        <th>字段类型</th>
        <th>是否必填</th>
        <th>字段选项</th>
        <th>操作</th>
      </tr>
      <tr>
        <td>{{ aaa }}</td>
        <td>{{ type }}</td>
        <td>{{ yesOrNo }}</td>
        <td>{{ one || two || three || fro||e }}</td>
        <td @click="showDrawer">编辑</td>
      </tr>
      <tr>
        <td>{{ aaa }}</td>
        <td>{{ type }}</td>
        <td>{{ yesOrNo }}</td>
        <td>{{ one || two || three || fro||e }}</td>
        <td @click="showDrawer1">编辑</td>
      </tr>
      <tr>
        <td>{{ aaa }}</td>
        <td>{{ type }}</td>
        <td>{{ yesOrNo }}</td>
        <td>{{ one || two || three || fro||e }}</td>
        <td @click="showDrawer">编辑</td>
      </tr>
    </table>
    <a-drawer
      title="字段编辑"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" layout="vertical" hide-required-mark>
        <a-row :gutter="16">
          <a-col :span="8">
            <a-form-item label="字段名称">
              <a-input
                @blur="ccc"
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true }],
                  },
                ]"
                placeholder="请填写字段名称"
              />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="字段类型">
              <a-select
                v-decorator="[
                  'type',
                  {
                    rules: [{ required: true, message: '请选择字段类型' }],
                  },
                ]"
                placeholder="请选择字段类型"
                @change="handleChange"
              >
                <a-select-option value="singleLineText">
                  单行文本
                </a-select-option>
                <a-select-option value="dateOf"> 日期 </a-select-option>
                <a-select-option value="radioDown"> 单选下拉 </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="是否必填">
              <a-radio-group
                v-decorator="[
                  'yesOrNo',
                  //   {
                  //     initialValue: 'yes',
                  //   },
                ]"
                @change="handleChange1"
              >
                <a-radio value="yes">是</a-radio>
                <a-radio value="no">否</a-radio>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="字段选项">
              <a-radio-group
                v-decorator="[
                  'fieldOptions',
                  //   {
                  //     initialValue: 'one',
                  //   },
                ]"
                v-if="!radioDowns"
                @change="handleChange2"
              >
                <a-radio value="one" v-if="singleLineTexts">无</a-radio>
                <a-radio value="one" v-if="dateOfs">年</a-radio>
                <a-radio value="two" v-if="dateOfs">年-月</a-radio>
                <a-radio value="three" v-if="dateOfs">年-月-日</a-radio>
                <a-radio value="fro" v-if="dateOfs">年-月-日 时：分</a-radio>
              </a-radio-group>
              <a-select
                mode="multiple"
                :default-value="['a1', 'b2']"
                style="width: 100%"
                placeholder="Please select"
                v-if="radioDowns"
                @change="handleChange3"
              >
                <a-select-option
                  v-for="i in 25"
                  :key="(i + 9).toString(36) + i"
                >
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          取消
        </a-button>
        <a-button type="primary" @click="aaaa"> 完成 </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
      singleLineTexts: false,
      dateOfs: false,
      radioDowns: false,
      types: "",
      type: "单行文本",
      yesOrNos: "",
      yesOrNo: "是",
      aa: "",
      aaa: "字段一",
      ones: "",
      one: "无",
      twos: "",
      two: "",
      threes: "",
      three: "",
      frs: "",
      fro: "",
      e: [],
    };
  },
  methods: {
    ccc(e) {
      console.log(e.target.value);
      this.aa = e.target.value;
    },
    showDrawer() {
      this.visible = true;
    },
    showDrawer1() {
      this.visible = true;
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      switch (value) {
        case "singleLineText":
          this.types = "单行文本";
          this.singleLineTexts = true;
          this.dateOfs = false;
          this.radioDowns = false;
          break;

        case "dateOf":
          this.types = "日期";
          this.dateOfs = true;
          this.singleLineTexts = false;
          this.radioDowns = false;
          break;

        default:
          this.types = "单行下拉";
          this.radioDowns = true;
          this.dateOfs = false;
          this.singleLineTexts = false;
          break;
      }
      //   console.log(this.singleLineTexts);
    },
    handleChange1(value) {
      console.log(value.target.value);
      this.yesOrNos = "是";
      switch (value.target.value) {
        case "yes":
          this.yesOrNos = "是";
          break;

        default:
          this.yesOrNos = "否";
          break;
      }
    },
    handleChange2(value) {
      console.log(value.target.value);
      if (!this.singleLineTexts) {
        switch (value.target.value) {
          case "one":
            this.ones = "年";
            break;
          case "two":
            this.twos = "年-月";
            break;
          case "three":
            this.threes = "年-月-日";
            break;
          case "fro":
            this.frs = "年-月-日 时：分";
            break;
        }
      } else {
        this.ones = "无";
      }
    },
    handleChange3(value) {
      console.log(value);
      this.e = value;
    },
    onClose() {
      this.visible = false;
    },
    aaaa() {
      this.type = this.types;
      this.yesOrNo = this.yesOrNos;
      console.log(this.aa);
      this.aaa = this.aa;
      this.one = this.ones;
      this.two = this.twos;
      this.three = this.threes;
      this.fro = this.frs;
      this.onClose();
    },
  },
};
</script>
<style>
table {
  margin: 0 auto;
}
</style>