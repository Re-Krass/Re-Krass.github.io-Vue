$loc = Get-Location;

Write-Host -ForegroundColor Yellow "Build site - script";

Write-Host -ForegroundColor Yellow "1: Run lint";
pnpm run lint;

Write-Host -ForegroundColor Yellow "2: Run build";
pnpm run build;

Write-Host -ForegroundColor Yellow "3: Generate documentation";
vuese gen;

Write-Host -ForegroundColor Yellow "4: Apply dark-theme";
# get the current folder
$currentFolder = Split-Path $MyInvocation.MyCommand.Path
# call the second script in the remote folder with arguments from the first
. (Join-Path $currentFolder .\scripts\replaceCssVuese.ps1)
# cd ..;
# Write-Host -ForegroundColor Yellow "5: Move website elements to destination";
# robocopy /S /E .\website-build .\ /move;
# git add .;
# cd ./re-krass-website;

cd $loc;
Write-Host -ForegroundColor Yellow "Script finished";