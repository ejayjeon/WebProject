<template>
  <q-layout class="q-pa-md">
      <!-- 1단계 : 정보 등록 -->
    <q-page-container class="editor">
    <q-stepper
      class="bg-grey-9 text-white"
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
    done-color="pink-3"
    active-color="grey-8">

    <q-page-container>
    <div class="row">
    <div class="col-10">

    <!-- 작품제목 -->
    <q-chip outline color="pink-3" text-color="white" icon="title">
    작품 타이틀 등록
    </q-chip>
    <q-space class="q-ma-md q-gutter-md"/>
    <q-input
    dark
    ref="titleRef"
    color="grey-8" v-model="title" label="제목"
    counter
    />

     <q-space class="q-ma-md q-gutter-md"/>
<!-- 작가 닉네임 -->
<q-chip outline color="pink-3" text-color="white" icon="3p">
작가 닉네임 등록
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
        <q-input
        counter 
        dark
        color="grey-8" v-model="nickName" label="닉네임"
        error-message="영어(대/소문자), 숫자, 한글만 입력해주세요"
        :error="!isValid"
        />
        
   <q-space class="q-ma-md q-gutter-md"/>
   
    <q-chip outline color="pink-3" text-color="white" icon="book">
작품 소개
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
        <q-input
        dark
        ref="contentRef"
        v-model="contentInfo"
        counter
        clearable
        type="textarea"
        color="grey-8"
        hint="200자 이내로 입력해 주세요"
        style="resize: none"
        class="contentInfo"/>
                </div>
            </div>
        </q-page-container>
  <q-stepper-navigation>
          <q-btn color="pink-3" @click="step = 2" label="Continue" />
          <q-btn flat @click="step = 1" color="pink-3" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    <!-- 2단계 : 사진 및 부가정보 등록 -->
      <q-step
        :name="2"
        title="커버 및 부가 정보 등록"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
        done-color="pink-3"
        active-color="grey-8">

       <q-page-container class="col-6">
<q-chip outline color="pink-3" text-color="white" icon="image">
표지 커버 이미지 등록
</q-chip>
        <div class="q-pa-md">
              <div class="upload-image" :style="{backgroundImage : `url(${coverImage})`}">
  </div>
    <q-file
    dark
      v-model="coverImage"
      label="이미지 파일을 선택해 주세요"
      flat
      use-chips
      multiple
      accept='image/jpeg,image/gif,image/png'
      style="max-width: 500px"
      color="pink-3"
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
<q-chip outline color="pink-3" text-color="white" icon="event">
연재 요일 체크
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-option-group
        dark
          name="serialdate"
          v-model="serialDate"
          :options="options"
          type="checkbox"
          color="pink-3"
          inline
        />
<q-space class="q-ma-md q-gutter-md"/>

<!-- 장르 -->
 <q-chip outline color="pink-3" text-color="white" icon="tag">
장르 
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>

<q-select
        flat
        dark
        v-model="genre"
        transition-show="flip-up"
        transition-hide="flip-down"
        multiple
        color="pink-3"
        :options="genreOptions"
        counter
        max-values="2"
        hint="두 개까지 선택할 수 있습니다"
        style="width: 250px"
      />
    </q-page-container>
    <q-stepper-navigation>
          <q-btn color="pink-3" @click="step = 3" label="Continue" />
          <q-btn flat @click="step = 1" color="pink-3" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

    <!-- 3단계 : 기타 공개 정보 등록 -->
      <q-step
        :name="3"
        title="오픈 여부 등록"
        caption="select one"
        icon="assignment"
        :done="step > 3"
        done-color="pink-3"
        active-color="grey-8">
        
        <q-page-container>

<!-- 3-1) 작품 공개 -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="pink-3" text-color="white" icon="lock open">
작품 공개/비공개 여부
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>

<q-toggle
v-model="privateTF"
:label="privateTF"
icon="lock open"
color="pink-3"
size= "lg"
false-value="비공개"
true-value="공개"
/>


<!-- 3-2) 리뷰 남기기 여부 -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="pink-3" text-color="white" icon="reviews">
리뷰창 공개 / 비공개
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-toggle
v-model="reviewTF"
:label="reviewTF"
icon="reviews open"
color="pink-3"
size= "lg"
false-value="비공개"
true-value="공개"
/>
<!-- 3-3) 독자 참여 여부  -->
<q-space class="q-ma-md q-gutter-md"/>
<q-chip outline color="pink-3" text-color="white" icon="handshake">
리더스파티(독자참여방) 오픈 / 클로즈
</q-chip>
<q-space class="q-ma-md q-gutter-md"/>
<q-toggle
v-model="partyTF"
:label="partyTF"
icon="handshake"
color="pink-3"
size= "lg"
false-value="클로즈"
true-value="오픈"
/>

        </q-page-container>
        <q-stepper-navigation>
          <q-btn color="pink-3" @click="step = 4" label="Continue" />
          <q-btn flat @click="step = 2" color="pink-3" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <!-- <template v-slot:navigation>
        <q-stepper-navigation>
         <q-btn @click="$refs.stepper.next()" color="pink-3" :label="step === 3 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="pink-3" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template> -->

    <!-- 4단계 : 등록한 정보 확인 및 finish -->
      <q-step
        :name="4"
        title="등록한 정보 및 동의 조건 확인"
        icon="add_comment"
        done-color="pink-3"
        active-color="grey-8">

<q-page-container>

<q-space class="q-ma-md q-gutter-md"/>
<q-card flat class="col-8 term bg-grey-9 text-white">
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
      <q-radio dark left-label v-model="termCheck" dense val="yes" label="동의합니다" color="pink-3"/>
      <q-radio dark left-label v-model="termCheck" dense val="no" label="동의하지 않습니다" color="pink-3">
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
          <q-btn color="pink-3" @click="onSubmitCreation" label="Finish" />
          <q-btn flat @click="step = 3" color="pink-3" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
</q-page-container>
</q-layout>
</template>
<script>
import { ref } from 'vue'
import 'firebase/firestore';
import { db } from '../../plugins/firebase'


export default {
    name: 'Creation',
    components: {
    },
    data(){ return {
    }},
  setup () {
  const onSubmitCreation = () => {
      db.collection('creation').add({
        title : this.title,
        nickName : this.nickname,
        contentInfo : this.contentInfo,
        coverImage : this.coverImage,
        serialDate : this.serialdate,
        genre : this.genre,
        privateTF : this.privateTF,
        reviewTF : this.reviewTF,
        partyTF : this.partyTF,
        termCheck : this.termCheck
      }).then((e) => {
        console.log(e)
      })
    }
    return {
    step: ref(1),
    title: ref(''),
    contentInfo: ref(''),
    nickName: ref(null),
    coverImage: ref(null),
    titleRef: ref(null),
    contentRef: ref(null),
    serialDate: ref([]),
    genre: ref([]),
    privateTF: ref(true),
    reviewTF: ref(true),
    partyTF: ref(true),
    termCheck: ref(true),
    options: [
        {label: '월', value: 'mon'},
        {label: '화', value: 'tue'},
        {label: '수', value: 'wed'},
        {label: '목', value: 'thu'},
        {label: '금', value: 'fri'},
        {label: '토', value: 'sat'},
        {label: '일', value: 'sun'}
      ],
      genreOptions : [
        {label: '판타지' , value: 'fantasy'},
        {label: 'SF' , value: 'SF'},
        {label: '로맨스' , value: '로맨스'},
        {label: '스릴러/호러' , value: 'thriller/horrer'},
        {label: '역사/무협' , value: 'historicalFiction'},
        {label: '성인19+' , value: 'adultOnly'},
        {label: '기타' , value: 'etc'},
      ],
      onSubmitCreation,
    }
  },
  methods: {
    isValid(){
        var regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
      this.nicknameRef.value.includes(regExp) == true
    },
    upload(e){
        let file = e.target.files[0]        
        let url = URL.createObjectURL(file);
        this.coverImage = url;
        console.log('이미지 ' + this.coverImage)
    },
   
  //   tagchange(e){
  //   console.log(e.target.value)
  //  if(e.target.value){
  //   if(e.keyCode != 8 || e.keyCode != 46) {
  //   this.tags.push(e.target.value);
  //   }
  //  } else {
  //    this.tags.pop()
  //  }
  //   console.log(this.tags)
  // },
  },
}
</script>
<style scope>
.editor {
    width: 80vw
}
.q-stepper {
    box-shadow: none;
    height: 100vh;
}
.upload-image{
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 200px;
    border: 1px solid #333333;
    border-radius: 10px;
    background-size:cover;
    background-repeat: no-repeat;
}
.term {
    height: 300px;
    overflow-y: auto;
}
</style>