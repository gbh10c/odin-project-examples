window.confirm("Click to begin countdown!");

    for (let i = 10; i >= 0; i--) {
      output = '';
      if (i==0) output += 'Blast Off!';
      if (i==10) output += 'Countdown 10';
    console.log(output || i);
  }

