# Generated by Django 5.0.1 on 2024-02-02 10:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog_form', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formdata',
            name='example_form_control_file',
        ),
    ]
