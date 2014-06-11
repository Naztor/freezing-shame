<?php

class Kontakt_Model extends Base_Model{

  protected $title = 'Kontakta oss';
  protected $text = '<p>Tfn: 040-123456</p>
<p>Besöksadress: Kråkgatan 14, Malmö</p>
<form>
  <legend>Skicka formulär till oss!</legend>
  <label>Namn</label><input/><br/>
  <label>Epost</label><input/><br/>
  <label>Meddelande</label><textarea></textarea><br/>
  <input type="submit" value="Klicka-skicka!"/>
</form>';

}