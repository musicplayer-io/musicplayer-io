---
title: Donations 💛
description: Donate to help build a free and open-source music player for the web.
keywords: donate, contribute, free, open source, music, player, web
template: page.jade
---


@ jumbo
---
title: donations
subtitle: The Music Player for Reddit is a labor of love but servers aren't free so any donation is welcome as a way to say thanks!
button:
  text: Donate
  url: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TYLGDAAKYPUEY
---
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="business" value="paypal@illyism.com">
    <input type="hidden" name="cmd" value="_donations">
    <input type="hidden" name="item_name" value="Music Player for Reddit">
    <input type="hidden" name="confirmation_note" value="Thank you!">
    <select name="currency_code" class="form-control">
      <option value="USD">U.S. Dollar</option>
      <option value="CAD">Canadian Dollar</option>
      <option value="EUR">Euro</option>
    </select>
    <input type="text" name="amount" value="10.00" class="form-control">
    <button type="submit">Donate with PayPal</button>
    <a href="http://illyism.tip.me" class="button">Donate with Bitcoin</a>
</form>
@ end

@ cashflow
---
title: Where your money goes
---
|||
|-:|:-|
|Development|$0|
|Maintenance|$0|
|Marketing|$0|
|Advertising|$0|
|Servers|$120|


Extra money will be spent next year.
@ end
