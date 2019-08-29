Write-Host "Replace string";
$path = "./docs/index.html"
((Get-Content -path $path -Raw) -replace 'href="[a-zA-Z0-9./_?=%&#\-\+@:]+.css"','href="css/style-docute.css"') | Set-Content -Path $path -NoNewline