<?php

use SmthDiff\Azurite\Azurite;

class AzuriteTest extends PHPUnit_Framework_TestCase {

  public function testAzuriteIsOn()
  {
    $azurite = new Azurite;
    $this->assertTrue($azurite->index());
  }

}
