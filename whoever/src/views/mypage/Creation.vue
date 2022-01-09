<template>
  <q-layout class="q-pa-md border">
      <!-- 1단계 : 정보 등록 -->
    <q-stepper
      v-model="step"
      ref="stepper"
      vertical
      animated
    >
      <q-step
        :name="1"
        title="필수 정보 등록"
        icon="settings"
        :done="step > 1"
        done-color="deep-purple-13"
        active-color="grey-8">

        <q-page-container>
            <div class="row">
                <div class="col-10">

                    <!-- 작품제목 -->
<q-chip outline color="deep-purple-13" text-color="white" icon="title">
작품 타이틀 등록
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
                    <q-input 
                    color="grey-8" v-model="title" label="Title"
                    counter
                    />

     <q-space class="q-ma-md q-gutter-md"/>
<!-- 작가 닉네임 -->
<q-chip outline color="deep-purple-13" text-color="white" icon="3p">
작가 닉네임 등록
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
        <q-input 
        color="grey-8" v-model="nickName" label="Nickname"
        error-message="영어(대/소문자), 숫자, 한글만 입력해주세요"
        :error="!isValid"
        />
   <q-space class="q-ma-md q-gutter-md"/>
   
    <q-chip outline color="deep-purple-13" text-color="white" icon="book">
작품 소개
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
        <q-input
        v-model="contentInfo"
        counter
        clearable
        type="textarea"
        color="grey-8"
        label="Information of your work"
        hint="200자 이내로 입력해 주세요"
        class="contentInfo"/>
                </div>
            </div>
        </q-page-container>
  <q-stepper-navigation>
          <q-btn color="deep-purple-13" @click="step = 2" label="Continue" />
          <q-btn flat @click="step = 1" color="deep-purple-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    <!-- 2단계 : 사진 및 부가정보 등록 -->
      <q-step
        :name="2"
        title="커버 및 부가 정보 등록"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
        done-color="deep-purple-13"
        active-color="grey-8">

       <q-page-container class="col-6">
<q-chip outline color="deep-purple-13" text-color="white" icon="image">
표지 커버 이미지 등록
</q-chip>
        <div class="q-pa-md">
              <div class="upload-image" :style="{backgroundImage : `url(${coverUrl})`}">
  </div>
    <q-file
      v-model="images"
      label="이미지 파일을 선택해 주세요"
      flat
      use-chips
      multiple
      accept='image/jpeg,image/gif,image/png'
      style="max-width: 500px"
      color="deep-purple-13"
      @input ="upload"
      counter>
     <template v-slot:prepend>
          <q-icon name="attach_file" />
          
        </template>
        <template v-slot:hint>
          이미지파일(png, jpg, jpeg)만 등록 가능합니다
        </template>
    </q-file>
  </div> 

<q-space />
<q-chip outline color="deep-purple-13" text-color="white" icon="event">
연재 요일 체크
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-option-group
          name="serialdate"
          v-model="serialDate"
          :options="serialDateOptions"
          type="checkbox"
          color="deep-purple-13"
          inline
        />
<q-space class="q-ma-md q-gutter-md"/>

<!-- 장르 -->
 <q-chip outline color="deep-purple-13" text-color="white" icon="tag">
장르 
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>

<q-select
        flat
        v-model="genre"
        transition-show="flip-up"
        transition-hide="flip-down"
        multiple
        color="deep-purple-13"
        :options="genreOptions"
        optionLabel="key"
        optionValue="value"
        counter
        max-values="2"
        hint="두 개까지 선택할 수 있습니다"
        style="width: 250px"
      />
    </q-page-container>
    <q-stepper-navigation>
          <q-btn color="deep-purple-13" @click="step = 3" label="Continue" />
          <q-btn flat @click="step = 1" color="deep-purple-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    <!-- 3단계 : 기타 공개 정보 등록 -->
      <q-step
        :name="3"
        title="오픈 여부 등록"
        caption="select one"
        icon="assignment"
        :done="step > 3"
        done-color="deep-purple-13"
        active-color="grey-8">
        
        <q-page-container>

<!-- 3-1) 작품 공개 -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="deep-purple-13" text-color="white" icon="lock open">
작품 공개/비공개 여부
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>

<q-toggle
v-model="privateTF"
:label="privateTF"
icon="lock open"
color="deep-purple-13"
size= "lg"
false-value="OPEN"
true-value="CLOSE"
/>


<!-- 3-2) 리뷰 남기기 여부 -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="deep-purple-13" text-color="white" icon="reviews">
리뷰 남기기 여부
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-toggle
v-model="reviewTF"
:label="reviewTF"
icon="reviews open"
color="deep-purple-13"
size= "lg"
false-value="NO"
true-value="YES"
/>

<!-- 3-3) 별점 참여 여부 -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="deep-purple-13" text-color="white" icon="star rate">
별점 남기기 여부
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-toggle
v-model="starRatingTF"
:label="starRatingTF"
icon="reviews open"
color="deep-purple-13"
size= "lg"
false-value="NO"
true-value="YES"
/>


<!-- 3-4) 독자 참여 여부  -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="deep-purple-13" text-color="white" icon="handshake">
독자 참여방 오픈 여부
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-toggle
v-model="partyTF"
:label="partyTF"
icon="handshake"
color="deep-purple-13"
size= "lg"
false-value="CLOSE"
true-value="OPEN"
/>

        </q-page-container>
        <q-stepper-navigation>
          <q-btn color="deep-purple-13" @click="step = 4" label="Continue" />
          <q-btn flat @click="step = 2" color="deep-purple-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    <!-- 4단계 : 등록한 정보 확인 및 finish -->
      <q-step
        :name="4"
        title="등록한 정보 및 동의 조건 확인"
        icon="add_comment"
        done-color="deep-purple-13"
        active-color="grey-8">

<q-page-container>

<q-space class="q-ma-md q-gutter-md"/>
<q-card flat class="col-8 term">
<pre>
[개인정보 보호법] 제15조 및 제17조에 따라 아래의 내용으로 개인정보를 수집, 
이용 및 제공하는데 동의합니다. 
□ 개인정보의 수집 및 이용에 관한 사항
- 수집하는 개인정보 항목 (수집 항목 내용 일체) : 성명, 전화번호, 이메일, 성별, 
생일 등 일체
- 개인정보의 이용 목적 : 수집된 개인정보를 작품에 따른 성별, 연령별 통계 수집 
목적으로 활용하며, 목적 외의 용도로는 사용하지 않습니다. 
□ 개인정보의 보관 및 이용 기간
- 귀하의 개인정보를 다음과 같이 보관하며, 수집, 이용 및 제공목적이 달성된 경우 
[개인정보 보호법] 제21조에 따라 처리합니다.  
</pre>
</q-card>
본인은 개인정보 수집 및 이용에 대해서
<div class="q-gutter-md">
 <q-space class="q-ma-md q-gutter-md"/>
      <q-radio left-label v-model="termCheck" dense val="YES" label="동의합니다" color="deep-purple-13"/>
      <q-radio left-label v-model="termCheck" dense val="NO" label="동의하지 않습니다" color="deep-purple-13">
          <q-tooltip anchor="top left" self="bottom left"
      transition-show="flip-right"
          transition-hide="flip-left">
  서비스 이용에 제한이 있을 수 있습니다
</q-tooltip>
      </q-radio>
      
    </div>
<q-space class="q-ma-md q-gutter-md"/>
</q-page-container>
<q-stepper-navigation>
          <!-- <q-btn color="deep-purple-13" @click="onSubmitCreation" label="Finish" /> -->
          <q-btn color="deep-purple-13" @click="$store.commit('setCreation', [title, contentInfo, nickName, coverUrl, JSON.stringify(genre), serialDate, privateTF, reviewTF, starRatingTF, partyTF, termCheck])" label="Finish" />
          <q-btn flat @click="step = 3" color="deep-purple-13" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
</q-layout>
</template>
<script>
import 'firebase/firestore';
import { storageRef } from '../../plugins/firebase'

export default {
    name: 'Creation',
    components: {
    },
    data(){ return {
    step : 1,
    title: null,
    contentInfo: null,
    nickName: null,
    images: null,
    coverUrl: null,
    genre: [],
    serialDate: [],
    privateTF: true,
    reviewTF: true,
    starRatingTF: true,
    partyTF: true,
    termCheck: true,
   serialDateOptions: [
        {
          label: '월',
          value: 'mon'
        },
        {
          label: '화',
          value: 'tue'
        },
        {
          label: '수',
          value: 'wed'
        },
        {
          label: '목',
          value: 'thu'
        },
        {
          label: '금',
          value: 'fri'
        },
        {
          label: '토',
          value: 'sat'
        },
        {
          label: '일',
          value: 'sun'
        }
      ],
    genreOptions : [
        {key: '판타지' , value: 'fantasy'},
        {key: 'SF' , value: 'SF'},
        {key: '로맨스' , value: 'Romance'},
        {key: '스릴러/호러' , value: 'thriller/horrer'},
        {key: '역사/무협' , value: 'historicalFiction'},
        {key: '성인19+' , value: 'adultOnly'},
        {key: '기타' , value: 'etc'},
      ],
    }},
  methods: {
    isValid(){
        var regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
      this.nickname.value.includes(regExp) == true
    },
    upload(e){
        let file = e.target.files;
        var num = Math.round(Math.random()*10000000)
        this.images = file[0];
        storageRef.child('image/' + num + this.images.key).put(this.images)        
        let url = URL.createObjectURL(this.images);
        console.log('저장완료 ' + this.images)
        this.coverUrl = url;
        console.log('URL ' + this.coverUrl)
    },
    // onSubmitCreation() {
    //   db.collection('creation').add({
    //     title : this.title,
    //     nickName : this.nickName,
    //     contentInfo : this.contentInfo,
    //     coverUrl : this.coverUrl,
    //     serialDate : this.serialDate,
    //     genre : this.genre,
    //     privateTF : this.privateTF,
    //     reviewTF : this.reviewTF,
    //     starRatingTF: this.starRatingTF,
    //     partyTF : this.partyTF,
    //     termCheck : this.termCheck,
    //     date : new Date(),
    //     // 로그인을 하면 이 영역이 null X
    //     uid : this.$store.state.localStorageUid,
    //     email : this.$store.state.localStorageEmail,
    //     name : this.$store.state.localStorageName
    //   }).then((result) => {
    //     console.log(result);        
    //     console.log(result.firestore.collection);        
    //     // console.log(result.firestore.namedQuery);        
    //     // console.log(result.value);    undefined    
    //     // console.log(...result);        ... x
    //     // console.log(result.target);      undefined

    //     alert('작가 계정 생성이 완료되었습니다')
    //     // this.$store.commit('setCreationData', result)
    //     // this.$router.push('/mypage')
      
    //   }).catch((err) => console.error(err))
    // },
  },
}
</script>
<style scope>
.q-stepper {
    box-shadow: none;
    height: 100vh;
}
.upload-image{
display: flex;
flex-direction: column;
width: 15%;
height: 150px;
background: rgb(201, 201, 201);
border-radius: 10px;
background-size:cover;
background-repeat: no-repeat;
}
.term {
    height: 300px;
    overflow-y: auto;
}
</style>