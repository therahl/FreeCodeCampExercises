$(document).ready(function() {

  var temp = [];
  var chain = [];

  $('button').click(function() {
    var id = this.id;
    var cls = $(this).attr('class');

    switch (cls) {
      case 'num':
        temp.push(id);
        $('.values').text(temp.join(''));
        break;
      case 'op':
        switch (id) {
          case 'dot':
            temp.push('.');
            $('.values').text(temp.join(''));
            break;
          case 'equals':
            chain.push(temp.join(''));
            $('.values').text(eval(chain.join('')));
            temp = [$('.values').text()];
            chain = [];
            break;
          case 'clear':
            temp = [];
            $('.values').text('0');
            break;
          case 'allClear':
            temp = [];
            chain = [];
            $('.values').text('0');
            break;
          default:
            chain.push(temp.join(''));
            temp = [$(this).text()];
            chain.push(temp);
            temp = [];
            $('.values').text('0');
            break;
        }
      default:
        break;
    }
    // console.log('temp: ' + temp.join(''));
    // console.log('chain: ' + chain);
  })

});