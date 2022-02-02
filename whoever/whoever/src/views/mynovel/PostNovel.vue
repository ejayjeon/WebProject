    <template>
    <q-layout class="postnovel text-white">
   
    <q-page-container>
        <div class="q-pa-md title">
            <q-input dark v-model="title" label="제목" dense color="grey-5" hint="예시) 1화 - 프롤로그">
                <template v-slot:after>
                     <q-btn style="background: #e392ae; color: white" @click="작성">작성</q-btn>
                      <q-space/>
                      <q-btn outline style="background: #424242; color: white" @click="모달">미리보기</q-btn>
                      <q-space/>
                    <q-btn outline style="color: #e392ae" @click="취소">취소</q-btn>
                </template>
            </q-input>
        </div>
    </q-page-container>
    <q-separator dark/>
    <q-page-container>
    <form
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
    >
    <div class="q-pa-md content">

    <div class="editorForm col-8">
    <q-editor
    class="postnovel bg-grey-9 text-white"
    flat
    toolbar-toggle-color="pink-3"
    ref="editorRef"
    @paste="onPaste"
    @paste.native="evt => pasteCapture(evt)"
    v-model="content"
    placeholder="당신의 이야기를 작성해 주세요..."
    height="70vh"
    />
    </div>
   <q-separator dark/>
    <div class="editorForm col-4">
        <q-card flat bordered class="showTitle bg-grey-9 text-white" style="border: none">
    <q-card-section v-html="title" />
    </q-card>
    <q-card dark flat bordered class="showContent bg-grey-9 text-white" style="border: none">
    <q-card-section v-html="content" />
    </q-card>
    </div>
    
        </div>
    </form>

    </q-page-container>
    
    
    </q-layout>
    </template>

<script>
import { ref } from 'vue'
export default {
name: 'PostNovel',
data(){return{
    saveWork: '',
    upload: '',
    content: null,
    title: '',
    writerMsg: '',
}},
setup () {
const editorRef = ref(null)
return {
    editorRef,
}
},
onPaste (evt) {
        // Let inputs do their thing, so we don't break pasting of links.
        if (evt.target.nodeName === 'INPUT') return
        let text, onPasteStripFormattingIEPaste
        evt.preventDefault()
        evt.stopPropagation()
        if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
          text = evt.originalEvent.clipboardData.getData('text/plain')
          editorRef.value.runCmd('insertText', text)
        }
        else if (evt.clipboardData && evt.clipboardData.getData) {
          text = evt.clipboardData.getData('text/plain')
          editorRef.value.runCmd('insertText', text)
        }
        else if (window.clipboardData && window.clipboardData.getData) {
          if (!onPasteStripFormattingIEPaste) {
            onPasteStripFormattingIEPaste = true
            editorRef.value.runCmd('ms-pasteTextOnly', text)
          }
          onPasteStripFormattingIEPaste = false
        }
      },
}
</script>

<style lang="sass" scope>
*
    padding: 0
    margin: 0
    box-sizing: content-box
.title
    padding: 50px 0 50px 0
.editorForm
    display: flex
    flex-direction: column
    width: 80vw
    justify-content: center
    padding-top: 30px
.showTitle 
    padding: 10px
    height: 10vh
    font-size: 24px
    font-weight: 900
    text-align: center
    font-family: RIDIBatang
.showContent 
    height: 64vh
    overflow-y: auto
    font-family: RIDIBatang
    text-indent: 10px
    line-height: 25px
    color: rgb(77, 77, 77)
</style>