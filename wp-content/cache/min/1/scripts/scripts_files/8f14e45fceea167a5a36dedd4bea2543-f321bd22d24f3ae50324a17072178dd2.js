var md5='8f14e45fceea167a5a36dedd4bea2543'
window['url_form_'+md5]='https://aefassessoria.com,br'
window['redirect_url'+md5]='https://www.aefassessoria.com.br/apresentacao-sistema-online/';var div='sh-crm-form-8f14e45fceea167a5a36dedd4bea2543'
var form='<div class="input-container row" style="background-color: transparent;"><div class="col-12"><input title="Nome completo" class="input-form input-field outlined-input" type="text" name="name" placeholder="Nome e sobrenome *" id="name_input_1681152732582758113" style="border-color: rgb(232, 232, 232); color: rgb(59, 59, 59); outline: none; background-color: white;" required="true"></div><div class="col-12"><input title="Email" class="input-form input-field outlined-input" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" name="email" placeholder="Email *" id="email_input_1681152734641358550" required="true" style="border-color: rgb(232, 232, 232); color: rgb(59, 59, 59); outline: none; background-color: white;"></div><div class="col-12"><input title="Número de Telefone" class="input-form input-field outlined-input" type="tel" pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" name="phone" placeholder="Whatsapp com DDD *" id="phone_input_1681152736403417127" required="true" style="border-color: rgb(232, 232, 232); color: rgb(59, 59, 59); outline: none; background-color: white;"></div><div class="col-12"><input title="Texto Personalizado" class="input-form input-field customized-input outlined-input" type="text" name="Qual a sua área de atuação? *" placeholder="Qual a sua área de atuação? *" id="text_input_1681152743636693186" required="true" style="border-color: rgb(232, 232, 232); color: rgb(59, 59, 59); outline: none; background-color: white;"></div><input type="hidden" name="form_response_id" value=""><div class="col-12" style="margin-top: 10px; text-align: center;"><input title="Enviar" class="input-form ok-button okbutton-standard ok-button-center 8f14e45fceea167a5a36dedd4bea2543" type="submit" name="okbutton" value="Trocar de Contador" id="okbutton_input" style="color: rgb(255, 255, 255); margin-left: 0px; background-color: rgb(22, 186, 148); border-color: rgb(22, 186, 148); outline: none; text-align: center;"></div></div>'
var cssId='forms.css'
if(!document.getElementById(cssId)){var head=document.getElementsByTagName('head')[0]
var link=document.createElement('link')
link.id=cssId
link.rel='stylesheet'
link.type='text/css'
link.href='https://aefassessoria.com,br/scripts/forms.css'
link.media='all'
head.appendChild(link)}
window['container'+md5]=Array.from(document.getElementsByClassName(div))
if(window['container'+md5].length===0){window['container'+md5]=[document.getElementById(div)]}
window['container'+md5].forEach(function(item,i){item.innerHTML=form
window['checkboxes'+i+md5]=item.querySelectorAll('input[type=checkbox]')
if(window['checkboxes'+i+md5]){window['checkboxes'+i+md5].forEach(function(item){item.addEventListener('change',function(){item.value=item.checked})})}
window['inputsField'+i+md5]=Object.values(item.children[0].getElementsByTagName('input')).concat(Array.from(item.querySelectorAll('select')))
const phoneInput=item.querySelector('input[name=phone]');function formatPhoneNumber(input){const value=input.value.replace(/\D/g,'');let formattedValue='';if(value.length<=2){formattedValue='('+value}else if(value.length<=6){formattedValue='('+value.slice(0,2)+') '+value.slice(2)}else if(value.length<=10){formattedValue='('+value.slice(0,2)+') '+value.slice(2,6)+'-'+value.slice(6)}else{formattedValue='('+value.slice(0,2)+') '+value.slice(2,7)+'-'+value.slice(7,11)}
input.value=formattedValue;if(formattedValue.length===1){input.value=''}}
phoneInput.addEventListener('input',function(){formatPhoneNumber(this)});window['inputsField'+i+md5].forEach(function(item){item.addEventListener('input',function(){item.style.border='2px solid #000'
if(item.nextSibling){item.nextSibling.remove()}})})
window['inputButton'+i+md5]=document.getElementsByClassName(md5)[i]
window['inputButton'+i+md5].addEventListener('click',function(event){var curMd5=event.target.classList[event.target.classList.length-1]
window['inputButton'+i+curMd5].disabled=!0
window['resp'+i+curMd5]={}
window['i'+i+curMd5]=0
window['inputsField'+i+curMd5].forEach(function(item){if(item.name!=='form_response_id'){window['resp'+i+curMd5][item.name]={}
window['resp'+i+curMd5][item.name].value=item.value
window['resp'+i+curMd5][item.name].type=item.type=='checkbox'?'3':item.type=='select-one'?'4':'1'}else{window['resp'+i+curMd5].form_response_id=''}
if(item.name==='phone'){window['resp'+i+curMd5][item.name].value=item.value.replace(/\D/g,'')
if(item.required&&window['resp'+i+curMd5][item.name].value.length>0&&window['resp'+i+curMd5][item.name].value.length<11){item.style.border='2px solid red'
const span=document.createElement('span')
span.style.color='red'
span.style.fontSize='12px'
span.style.marginLeft='5px'
span.innerHTML='Número inválido'
item.parentNode.insertBefore(span,item.nextSibling)
window['inputButton'+i+curMd5].disabled=!1
window['i'+i+curMd5]++}}
if(item.type==='select-one'){window['resp'+i+curMd5][item.name].options=[]
Array.from(item.children).forEach(function(option){window['resp'+i+curMd5][item.name].options.push(option.value)})}
if(item.required&&item.value===''){item.style.border='2px solid red'
const span=document.createElement('span')
span.style.color='red'
span.style.fontSize='12px'
span.style.marginLeft='5px'
span.innerHTML='Campo obrigatório'
item.parentNode.insertBefore(span,item.nextSibling)
window['inputButton'+i+curMd5].disabled=!1
window['i'+i+curMd5]++}})
if(window['resp'+i+curMd5].form_response_id!==''){return}
delete window['resp'+i+curMd5].okbutton
window['resp'+i+curMd5].md5=curMd5
const urlCompleted=window['url_form_'+md5]+'/api/createFormAnswers'
if(!window['i'+i+curMd5]){fetch(urlCompleted,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(window['resp'+i+curMd5])}).then(response=>{if(response.status===200){if(window['redirect_url'+curMd5]!=='https://'){location.replace(window['redirect_url'+curMd5])}else{const targetDiv=window['container'+curMd5][0];targetDiv.style.position='relative';const blurBackground=document.createElement('div');blurBackground.style.position='absolute';blurBackground.style.top='0';blurBackground.style.left='0';blurBackground.style.width='100%';blurBackground.style.height='100%';blurBackground.style.backgroundColor='rgba(0, 0, 0, 0.5)';blurBackground.style.filter='blur(5px)';blurBackground.style.zIndex='9998';targetDiv.appendChild(blurBackground);const wrapper=document.createElement('div');wrapper.style.position='absolute';wrapper.style.top='50%';wrapper.style.left='50%';wrapper.style.transform='translate(-50%, -50%)';wrapper.style.zIndex='9999';wrapper.style.width='80%';wrapper.style.backgroundColor='#fff';wrapper.style.color='#000';wrapper.style.display='flex';wrapper.style.justifyContent='center';wrapper.style.alignItems='center';wrapper.style.flexDirection='column';wrapper.style.borderRadius='20px';wrapper.style.padding='20px';targetDiv.appendChild(wrapper);const div=document.createElement('div');div.style.backgroundColor='transparent';div.style.borderRadius='20px';div.style.padding='20px';div.style.width='100%';div.style.maxHeight='60%';div.style.fontSize='2em';div.style.textAlign='center';div.innerHTML='Formulário enviado com sucesso!';wrapper.appendChild(div);const closeButton=document.createElement('button');closeButton.innerText='Ok';closeButton.style.marginTop='20px';closeButton.style.marginBottom='20px';closeButton.style.backgroundColor='#888';closeButton.style.color='white';closeButton.style.border='none';closeButton.style.padding='12px 24px';closeButton.style.borderRadius='5px';closeButton.style.cursor='pointer';closeButton.style.fontWeight='bold';closeButton.style.fontSize='1.2em';wrapper.appendChild(closeButton);closeButton.addEventListener('click',function(){div.remove();wrapper.remove();blurBackground.remove()})}}else{return response.json()}}).then(data=>{if(data!==undefined){alert(data.message)
window['inputButton'+i+curMd5].disabled=!1}}).catch(error=>{window['inputButton'+i+curMd5].disabled=!1
console.error(error)})}})})