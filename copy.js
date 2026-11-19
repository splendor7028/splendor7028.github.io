const ok=document.getElementById('ok');
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{
  const label=b.textContent;
  try{await navigator.clipboard.writeText('7028778681');if(ok)ok.textContent='복사됐어요! 가입 화면 후원자 번호 칸에 붙여넣기 하세요.';b.textContent='복사됨 ✓';setTimeout(()=>b.textContent=label,1800);}
  catch(e){if(ok)ok.textContent='번호를 길게 눌러 복사해 주세요: 7028778681';}
});
