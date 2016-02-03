from django.db import models

# Create your models here.

class Banners(models.Model):
	class Meta:
	    verbose_name = 'Banner'
	    verbose_name_plural = 'Banners'

	name = models.CharField(max_length=255, verbose_name='Name')
	zipfile = models.CharField(max_length=255, verbose_name='ZipFile\'s name')
	date = models.DateTimeField(auto_now_add=True, verbose_name='Date created')

	def __unicode__(self):
		return "%s"%self.name


class ChewbakkkaSay(models.Model):
	class Meta:
	    verbose_name = 'Chewbakkka Hello'
	    verbose_name_plural = 'Chewbakkka Hello'

	hello_name = models.CharField(max_length=255, verbose_name='Chewbakkka say')

	def __unicode__(self):
		return "%s"%self.hello_name