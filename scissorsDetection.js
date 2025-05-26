function drawScissorsTriangle(predictions) {
  if (predictions.length > 0) {
    const keypoints = predictions[0].scaledMesh;

    // 檢測剪刀手 (假設第5點和第17點為手勢的關鍵點)
    const [x1, y1] = keypoints[5];
    const [x2, y2] = keypoints[17];
    const distance = dist(x1, y1, x2, y2);

    if (distance < 50) { // 假設距離小於50表示剪刀手
      // 在額頭上繪製三角形 (假設第10點為額頭位置)
      const [fx, fy] = keypoints[10];
      noFill();
      stroke(0, 255, 0);
      strokeWeight(2);
      triangle(fx, fy - 20, fx - 15, fy + 10, fx + 15, fy + 10);
    }
  }
}
