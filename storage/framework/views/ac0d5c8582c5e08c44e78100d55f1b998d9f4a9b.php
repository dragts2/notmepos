<!-- resources/views/emails/custom.blade.php -->

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo e($data['subject']); ?></title>
</head>

<body>
    <div style="margin: 10px; padding: 10px;">
     
      <?php echo $data['body']; ?>


      <p
        style="box-sizing: border-box; font-family: -apple-system, position: relative; line-height: 1.5em; margin-top: 0; color: #b0adc5; font-size: 12px; text-align: center;">
        &copy; <?php echo date ('Y'); ?>  <?php echo e($data['company_name']); ?>. All rights reserved.</p>
    </div>
</body>

</html><?php /**PATH C:\xampp\htdocs\resources\views/emails/custom.blade.php ENDPATH**/ ?>