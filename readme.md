```php
    Class::function($param);
`Fenced code blocks do work in Markdown Gists, and in fact your code is being rendered that way. If you inspect the blocks you'll see that they are contained in divs with class="highlight highlight-PHP".

The problem is that PHP code is only recognized for highlighting by GFM if it includes the <?php delimiter (much like PHP code only runs inside a <?php block). Add this to the top of each PHP code block and you should be good to go, e.g.:

...

```php
<?php
class GO_Example_Model_Thing extends GO_Base_Db_ActiveRecord {
<!-- language: php -->    ...``
