#!/bin/bash
pnpm run lint;
pnpm run build;
vuese gen;
cd ..;
mv website-build/* ./;
git add .
