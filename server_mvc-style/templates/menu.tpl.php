<nav><ul>
  <?php
    foreach($links as $href => $text){
      if($page == $href){
        print('<li><strong>' . $text . '</strong></li>');
      }else{
        print('<li><a href=' . $href . '>' . $text . '</a></li>'); 
      }
    }
  ?>
</ul></nav>