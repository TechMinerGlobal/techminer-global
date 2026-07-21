$iterations=20
for ($i=1; $i -le $iterations; $i++) {
  Write-Output "=== $(Get-Date -Format o) - iteration $i/$iterations ==="
  try {
    $api=Invoke-RestMethod -Headers @{Accept='application/vnd.github+json'} -Uri 'https://api.github.com/repos/TechMinerGlobal/techminer-global/pages' -ErrorAction Stop
    $api | ConvertTo-Json -Depth 5
  } catch {
    Write-Output "Pages API: ERROR or Not Found: $($_.Exception.Message)"
  }
  & curl.exe -k -I https://techminerglobal.com
  & curl.exe -k -I https://www.techminerglobal.com
  Start-Sleep -Seconds 30
}
Write-Output 'Polling complete.'
