<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
 <div id="msgSend">
    <div class="main">
        <form name="msgSendForm" id="msgSendForm" method="post">
                <div id="direct_parent" class="item">
                    <div class="itemLeft">&nbsp;</div>
                    <div class="itemRight">
                        <div class="itemColumn">
                            <div class="dirLeft">
                                <div class="textarea">
                                    <textarea placeholder="請輸入會員編號"></textarea>
                                </div>
                            </div>
                            <div class="dirRight">
                                <div id="buttonAdd" class="buttonAdd" @click="addParent">增加</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="type_parent" class="item">
                    <div class="itemLeft">發送方式</div>
                    <div class="itemRight">
                        <div class="type_column_wrap">
                            <div class="type_column first-row">
                                <div class="opt_1 sign">
                                    <span class="name">姓名</span>
                                    <span class="option">選項</span>
                                </div>
                                <div @click="first_click('CUSTOM')" :class="first_check('CUSTOM')" class="opt_2">
                                    <span class="relative"><i class="checkAll"></i>自訂</span>
                                </div>
                                <div @click="first_click('SMS')" :class="first_check('SMS')" class="opt_3">
                                    <span class="relative"><i class="checkAll"></i>簡訊</span>
                                </div>
                                <div @click="first_click('APP')" :class="first_check('APP')" class="opt_4">
                                    <span class="relative"><i class="checkAll"></i>APP</span>
                                </div>
                                <div @click="first_click('LINE')" :class="first_check('LINE')" class="opt_5">
                                    <span class="relative"><i class="checkAll"></i>LINE</span>
                                </div>
                            </div>
                            <div id="sendList">
                                <div v-for="(item, index) in custom" class="type_column">
                                    <div class="opt_1">
                                        <div>{{ item.name }}</div>
                                        <div class="type_number">{{ item.custNo }}</div>
                                    </div>
                                    <div class="opt_2">
                                        <div @click="tick_click(item,'CUSTOM')" :class="tick_check(item,'CUSTOM')"></div>
                                    </div>
                                    <div class="opt_3">
                                        <div @click="tick_click(item,'SMS')" :class="tick_check(item,'SMS')"></div>
                                    </div>
                                    <div class="opt_4">
                                        <div @click="tick_click(item,'APP')" :class="tick_check(item,'APP')"></div>
                                    </div>
                                    <div class="opt_5">
                                        <div @click="tick_click(item,'LINE')" :class="tick_check(item,'LINE')"></div>
                                    </div>
                                    <a @click="removeItem(index)" class="c-delete"><i class="tickDel"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <button @click="removeAll" class="grayBtn w-90" type="reset">清除</button>
                <button id="submitBtn" class="greenBtn w-90">確認</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        custom: []
      }
    },
    mounted() {
      this.custom = [
          {
                  "custNo": "AB0000794582",
                  "name": "研發測試",
                  "notifyType": "SMS"
          },
          {
                  "custNo": "AC0007002858",
                  "notifyType": "LINE",
                  "name": "測試員"
          },
          {
                  "custNo": "AD0007005633",
                  "notifyType": "SMS",
                  "name": "周杰倫"
          }
      ]
    },
    methods: {
      first_check: function(notifyType){//檢查是否全部勾選
        if(!this.custom.length) return ""; //沒有資料回傳空字串
        for(var i=0;i<this.custom.length;i++){
          if(this.custom[i].notifyType !== notifyType) return "";
        }
        return "check";//代表全都有找到
      },
      first_click: function(notifyType){
        for(var i=0;i<this.custom.length;i++){
          this.custom[i].notifyType = notifyType
        }
      },
      tick_click : function (item,notifyType){
          item.notifyType = notifyType;
      },
      tick_check : function(item,notifyType){
          if(!item) return "";
          if(item.notifyType == notifyType){//代表勾選
             return "tick";
          }else{
             return "un_tick";
          }
      },
      removeItem: function (index) {
          this.custom.splice(index, 1);
      },
      removeAll : function(){
          this.custom = [];
      },
      addParent:function(){

      }
    }
}

</script>

<style scoped>

</style>
